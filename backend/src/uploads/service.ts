import AWS from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import { UploadedFile } from "./model";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Configure AWS
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  region: process.env.AWS_REGION || "us-east-1",
});

// Set up multer for handling file uploads
// Cast multerS3 to any to avoid TypeScript errors from type mismatch
export const upload = multer({
  storage: (multerS3 as any)({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET_NAME || "your-bucket-name",
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: (req: any, file: Express.Multer.File, cb: any) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req: any, file: Express.Multer.File, cb: any) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, `uploads/${uniqueSuffix}-${file.originalname}`);
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

export const saveFileInfo = async (userId: string, fileData: UploadedFile) => {
  try {
    return await prisma.files.create({
      data: {
        key: fileData.key,
        url: fileData.location,
        filename: fileData.originalname,
        mimetype: fileData.mimetype,
        size: fileData.size,
        account: {
          connect: {
            id: userId,
          },
        },
      },
    });
  } catch (error) {
    throw new Error(`Failed to save file info: ${error}`);
  }
};

export const listUserFiles = async (userId: string) => {
  return await prisma.files.findMany({
    where: {
      accountId: userId,
    },
  });
};

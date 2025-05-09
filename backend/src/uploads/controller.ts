import { Request, Response } from "express";
import { upload, saveFileInfo } from "./service";
import { UploadedFile } from "./model";
import { log } from "console";

// Handle single file upload
export const uploadSingleFile = (req: Request, res: Response) => {
  const singleUpload = upload.single("file");

  singleUpload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    try {
      // Cast the file to include the S3 specific properties
      const file = req.file as any;
      // Get the user ID from the JWT token (fallback to name for backward compatibility)
      const userId = req.user?.id;
      console.log(req.body);
      const fileData: UploadedFile = {
        key: file.key,
        location: file.location,
        originalname: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
      };

      const savedFile = await saveFileInfo(userId, fileData);
      res.json({ success: true, file: savedFile });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });
};

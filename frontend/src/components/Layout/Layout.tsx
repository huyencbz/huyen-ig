import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface LayoutProps {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}
export const Layout: FC<LayoutProps> = ({ header, children, footer }) => {
  return (
    <div className="h-screen">
      {header}
      <div className={twMerge(header && "pt-14", footer && "pb-16")}>
        {children}
      </div>
      {footer}
    </div>
  );
};

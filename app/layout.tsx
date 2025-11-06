import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "医疗系统测试项目",
  description: "基于 Next.js 和 v0.dev 构建的医疗系统测试项目",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
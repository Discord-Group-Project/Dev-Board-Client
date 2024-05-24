import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}

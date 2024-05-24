import type { Metadata } from "next";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Home",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

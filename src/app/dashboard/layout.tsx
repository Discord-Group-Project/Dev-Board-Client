import { DashWrapper } from "@/lib";
import type { Metadata } from "next";
import { Sidebar } from "@/components/dashboard/";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DashWrapper>
      <Sidebar />
      <main>{children}</main>
    </DashWrapper>
  );
}

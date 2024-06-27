import Sidebar from "@/components/dashboard/Sidebar";
import { DashWrapper } from "@/lib";
import type { Metadata } from "next";

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
      <main>{children}</main>;
    </DashWrapper>
  );
}

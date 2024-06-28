import { ReactQueryProvider } from "@/lib";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>
      <body className="bg-gray-950 w-full h-screen text-white">
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}

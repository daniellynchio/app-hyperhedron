import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ChatDrawer, ChatProvider, ChatTrigger } from "@/components/chat-drawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hyperhedron",
  description: "Hyperhedron - Your AI-powered workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full overflow-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full overflow-hidden`}
      >
        <ChatProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className="flex-1 overflow-auto">
              <div className="flex items-center gap-2 p-2">
                <SidebarTrigger className="cursor-pointer" />
              </div>
              {children}
            </main>
            <ChatTrigger className="self-start m-2" />
            <ChatDrawer />
          </SidebarProvider>
        </ChatProvider>
      </body>
    </html>
  );
}

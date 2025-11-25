import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ChatDrawer, ChatProvider, ChatTrigger } from "@/components/chat-drawer";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts";
import { CreativePrompts } from "@/components/creative-prompts";

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
            <div className="flex flex-col h-svh">
              <div className="bg-sidebar p-4 border-r border-b border-sidebar-border rounded-tr-xl rounded-br-xl">
                <SidebarTrigger className="cursor-pointer" />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <header className="flex items-center h-16 px-4">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Hyperhedron</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/project">Discovery</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Research</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </header>
              <main className="flex-1 overflow-auto">
                {children}
              </main>
            </div>
            <div className="flex flex-col h-svh">
              <div className="bg-sidebar p-4 border-l border-b border-sidebar-border rounded-tl-xl rounded-bl-xl">
                <ChatTrigger className="cursor-pointer" />
              </div>
              <div className="flex flex-col items-center gap-3 p-4">
                <KeyboardShortcuts />
                <CreativePrompts />
              </div>
            </div>
            <ChatDrawer />
          </SidebarProvider>
        </ChatProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ChatDrawer, ChatProvider, ChatTrigger } from "@/components/chat-drawer";
import { AppBreadcrumbs } from "@/components/app-breadcrumbs";
import { ProjectProvider } from "@/components/project-context";
import { ProjectIndicator } from "@/components/project-indicator";
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts";
import { CreativePrompts } from "@/components/creative-prompts";
import { FeedbackButton } from "@/components/feedback-button";
import { TutorialButton } from "@/components/tutorial-button";
import { PageControls } from "@/components/page-controls";
import { ModalProvider, GlobalModal } from "@/components/modal";

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
        <ModalProvider>
        <ProjectProvider>
        <ChatProvider>
          <SidebarProvider>
            <AppSidebar />
            <div className="flex flex-col h-svh">
              <div className="bg-sidebar p-4 border-r border-b border-sidebar-border rounded-tr-xl rounded-br-xl">
                <SidebarTrigger className="cursor-pointer" />
              </div>
              <div className="flex flex-col items-center gap-3 px-4 py-8">
                <TutorialButton />
                <KeyboardShortcuts />
                <CreativePrompts />
                <FeedbackButton />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <header className="flex items-center gap-4 h-16 px-8">
                <ProjectIndicator />
                <span className="text-muted-foreground">/</span>
                <AppBreadcrumbs />
              </header>
              <main className="flex-1 overflow-auto">
                {children}
              </main>
            </div>
            <div className="flex flex-col h-svh">
              <div className="bg-sidebar p-4 border-l border-b border-sidebar-border rounded-tl-xl rounded-bl-xl">
                <ChatTrigger className="cursor-pointer" />
              </div>
              <PageControls className="px-4 py-8" />
            </div>
            <ChatDrawer />
            <GlobalModal />
          </SidebarProvider>
        </ChatProvider>
        </ProjectProvider>
        </ModalProvider>
      </body>
    </html>
  );
}

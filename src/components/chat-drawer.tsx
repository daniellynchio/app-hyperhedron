"use client";

import * as React from "react";
import { useState } from "react";
import { MessageSquare, Send, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const CHAT_WIDTH = "24rem";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

type ChatContextProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleChat: () => void;
};

const ChatContext = React.createContext<ChatContextProps | null>(null);

function useChat() {
  const context = React.useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider.");
  }
  return context;
}

function ChatProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  const toggleChat = React.useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "i" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleChat();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleChat]);

  const contextValue = React.useMemo<ChatContextProps>(
    () => ({ open, setOpen, toggleChat }),
    [open, toggleChat]
  );

  return (
    <ChatContext.Provider value={contextValue}>
      {children}
    </ChatContext.Provider>
  );
}

function ChatTrigger({ className, ...props }: React.ComponentProps<typeof Button>) {
  const { toggleChat } = useChat();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("size-7 cursor-pointer", className)}
      onClick={toggleChat}
      {...props}
    >
      <Sparkles />
      <span className="sr-only">Toggle Chat</span>
    </Button>
  );
}

function ChatPanel({ className, ...props }: React.ComponentProps<"div">) {
  const { open } = useChat();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I received your message. This is a placeholder response.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      data-state={open ? "expanded" : "collapsed"}
      style={{ "--chat-width": CHAT_WIDTH } as React.CSSProperties}
      className="group peer text-sidebar-foreground hidden md:block"
      data-slot="chat-panel"
    >
      {/* Gap element */}
      <div
        className={cn(
          "relative w-(--chat-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[state=collapsed]:w-0"
        )}
      />
      {/* Fixed panel */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-10 hidden h-svh w-(--chat-width) transition-[right,width] duration-200 ease-linear md:flex",
          "group-data-[state=collapsed]:right-[calc(var(--chat-width)*-1)]",
          "border-l",
          className
        )}
        {...props}
      >
        <div className="bg-sidebar flex h-full w-full flex-col">
          {/* Header */}
          <div className="flex flex-col gap-2 p-2 border-b border-sidebar-border">
            <div className="flex items-center gap-2 px-2 py-2">
              <span className="font-semibold">AI Assistant</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-auto p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3",
                    message.role === "user" && "flex-row-reverse"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                      message.role === "assistant"
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "bg-sidebar-accent"
                    )}
                  >
                    {message.role === "assistant" ? (
                      <Bot className="h-4 w-4" />
                    ) : (
                      <User className="h-4 w-4" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "rounded-lg px-3 py-2 max-w-[80%]",
                      message.role === "assistant"
                        ? "bg-sidebar-accent"
                        : "bg-sidebar-primary text-sidebar-primary-foreground"
                    )}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="relative rounded-lg border border-sidebar-border bg-sidebar-accent focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background">
              <Textarea
                placeholder="Ask, search or chat..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="min-h-[80px] max-h-32 resize-none border-0 bg-transparent pr-12 focus-visible:ring-0 focus-visible:ring-offset-0"
                rows={2}
              />
              <Button
                size="icon"
                onClick={handleSend}
                disabled={!input.trim()}
                className="absolute bottom-2 right-2 h-7 w-7 rounded-full"
              >
                <Send className="h-3.5 w-3.5" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatDrawer() {
  return <ChatPanel />;
}

export { ChatDrawer, ChatProvider, ChatTrigger, useChat };

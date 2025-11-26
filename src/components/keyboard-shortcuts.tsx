"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Command } from "lucide-react";

const shortcuts = [
  { keys: ["⌘", "I"], description: "Toggle sidebar" },
  { keys: ["⇧", "⌘", "I"], description: "Toggle chat" },
];

export function KeyboardShortcuts() {
  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-7 cursor-pointer"
            >
              <Command className="h-4 w-4" />
              <span className="sr-only">Keyboard shortcuts</span>
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent side="right">Keyboard shortcuts</TooltipContent>
      </Tooltip>
      <PopoverContent align="start" className="w-56">
        <div className="space-y-2">
          <p className="text-sm font-medium">Keyboard Shortcuts</p>
          <div className="space-y-1">
            {shortcuts.map((shortcut, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-muted-foreground">
                  {shortcut.description}
                </span>
                <div className="flex gap-1">
                  {shortcut.keys.map((key, keyIndex) => (
                    <kbd
                      key={keyIndex}
                      className="px-1.5 py-0.5 text-xs bg-muted rounded border border-border"
                    >
                      {key}
                    </kbd>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

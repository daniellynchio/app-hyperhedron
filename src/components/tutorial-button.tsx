"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Play } from "lucide-react";

export function TutorialButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-7 cursor-pointer"
        >
          <Play className="h-4 w-4" />
          <span className="sr-only">Tutorial</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right">Tutorial</TooltipContent>
    </Tooltip>
  );
}

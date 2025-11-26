"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { PenLine } from "lucide-react";
import { useModal } from "@/components/modal";

export function FeedbackButton() {
  const { openModal } = useModal();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-7 cursor-pointer"
          onClick={() => openModal("feedback")}
        >
          <PenLine className="h-4 w-4" />
          <span className="sr-only">Feedback</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right">Feedback</TooltipContent>
    </Tooltip>
  );
}

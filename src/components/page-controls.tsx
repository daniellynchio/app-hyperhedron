"use client";

import { Save, Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface PageControlButton {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

interface PageControlsProps {
  buttons?: PageControlButton[];
  className?: string;
}

const defaultButtons: PageControlButton[] = [
  { icon: <Save className="size-4" />, label: "Save" },
  { icon: <Copy className="size-4" />, label: "Copy" },
  { icon: <Download className="size-4" />, label: "Download" },
];

export function PageControls({
  buttons = defaultButtons,
  className,
}: PageControlsProps) {
  return (
    <div className={className}>
      <ButtonGroup orientation="vertical">
        {buttons.map((button, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="cursor-pointer"
                onClick={button.onClick}
                aria-label={button.label}
              >
                {button.icon}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">{button.label}</TooltipContent>
          </Tooltip>
        ))}
      </ButtonGroup>
    </div>
  );
}

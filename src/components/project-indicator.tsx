"use client";

import { useProject } from "@/components/project-context";
import { cn } from "@/lib/utils";

export function ProjectIndicator() {
  const { selectedProjectData } = useProject();

  if (!selectedProjectData) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className={cn("h-2 w-2 rounded-full", selectedProjectData.color)} />
      <span className="text-muted-foreground">{selectedProjectData.label}</span>
    </div>
  );
}

"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const labelMap: Record<string, string> = {
  dashboard: "Dashboard",
  notifications: "Notifications",
  settings: "Settings",
  subscription: "Subscription",
  legal: "Legal",
  help: "Help",
  workspace: "Workspace",
  project: "Home",
  discovery: "Discovery",
  research: "Research",
  strategy: "Strategy",
  concept: "Mood Board",
  direction: "Creative Direction",
  dna: "Creative DNA",
  prompts: "Prompts",
  artifacts: "Artifacts",
};

function formatSegment(segment: string): string {
  return labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
}

export function AppBreadcrumbs() {
  const pathname = usePathname();

  let segments = pathname.split("/").filter(Boolean);

  // Skip "project" when it has child segments (it's a sibling, not a parent)
  if (segments[0] === "project" && segments.length > 1) {
    segments = segments.slice(1);
  }

  if (segments.length === 0) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const href = "/" + segments.slice(0, index + 1).join("/");
          const label = formatSegment(segment);

          return (
            <BreadcrumbItem key={href}>
              {index > 0 && <BreadcrumbSeparator />}
              {isLast ? (
                <BreadcrumbPage>{label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

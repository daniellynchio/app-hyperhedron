"use client";

import { useState } from "react";
import { useProject, projects } from "@/components/project-context";
import {
  Settings,
  LayoutDashboard,
  Bell,
  ChevronDown,
  ChevronsUpDown,
  Check,
  Home,
  Compass,
  Search,
  Target,
  Lightbulb,
  Palette,
  Dna,
  MessageSquare,
  MoreHorizontal,
  Plus,
  CreditCard,
  Scale,
  HelpCircle,
  Box,
  Shapes,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

const workspaceItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
    badge: 3,
  },
];


const moduleItems = [
  {
    title: "Discovery",
    url: "/project/discovery",
    icon: Compass,
  },
  {
    title: "Research",
    url: "/project/research",
    icon: Search,
  },
  {
    title: "Strategy",
    url: "/project/strategy",
    icon: Target,
  },
  {
    title: "Mood Board",
    url: "/project/concept",
    icon: Lightbulb,
  },
  {
    title: "Creative Direction",
    url: "/project/direction",
    icon: Palette,
  },
  {
    title: "Creative DNA",
    url: "/project/dna",
    icon: Dna,
  },
  {
    title: "Prompts",
    url: "/project/prompts",
    icon: MessageSquare,
  },
];

export function AppSidebar() {
  const { selectedProject, setSelectedProject, selectedProjectData } = useProject();
  const [projectOpen, setProjectOpen] = useState(false);

  const selectedProjectLabel = selectedProjectData?.label || "Select project";
  const selectedProjectColor = selectedProjectData?.color;

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-2">
          <Logo size={24} />
          <span className="text-lg font-semibold">Hyperhedron</span>
        </div>
      </SidebarHeader>
      <SidebarSeparator className="mx-0" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="flex items-center gap-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton className="flex-1 justify-between cursor-pointer border border-sidebar-border">
                        <span>Hyperhedron</span>
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      <DropdownMenuItem>
                        <span>Hyperhedron</span>
                        <Check className="h-4 w-4 ml-auto" />
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <div className="p-1">
                        <Button variant="ghost" className="w-full justify-start cursor-pointer" size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          New Workspace
                        </Button>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton className="w-8 p-0 justify-center cursor-pointer">
                        <MoreHorizontal className="h-4 w-4" />
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <a href="/workspace/settings">Workspace Settings</a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </SidebarMenuItem>
              {workspaceItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="h-4 w-4 opacity-50" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.badge && <SidebarMenuBadge className="bg-destructive !text-black rounded-full">{item.badge}</SidebarMenuBadge>}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator className="mx-0" />
        <SidebarGroup>
          <SidebarGroupLabel>Project</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="flex items-center gap-1">
                  <Popover open={projectOpen} onOpenChange={setProjectOpen}>
                    <PopoverTrigger asChild>
                      <SidebarMenuButton className="flex-1 justify-between cursor-pointer border border-sidebar-border">
                        <div className="flex items-center gap-2">
                          {selectedProjectColor && (
                            <span className={cn("h-2 w-2 rounded-full", selectedProjectColor)} />
                          )}
                          <span>{selectedProjectLabel}</span>
                        </div>
                        <ChevronsUpDown className="h-4 w-4 opacity-50" />
                      </SidebarMenuButton>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-0" align="start">
                      <Command>
                        <CommandInput placeholder="Search projects..." />
                        <CommandList>
                          <CommandEmpty>No project found.</CommandEmpty>
                          <CommandGroup>
                            {projects.map((project) => (
                              <CommandItem
                                key={project.value}
                                value={project.value}
                                onSelect={(value) => {
                                  setSelectedProject(value);
                                  setProjectOpen(false);
                                }}
                              >
                                <span className={cn("h-2 w-2 rounded-full", project.color)} />
                                <span>{project.label}</span>
                                <Check
                                  className={cn(
                                    "h-4 w-4 ml-auto",
                                    selectedProject === project.value ? "opacity-100" : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                        <div className="border-t p-1">
                          <Button variant="ghost" className="w-full justify-start cursor-pointer" size="sm">
                            <Plus className="h-4 w-4 mr-2" />
                            New Project
                          </Button>
                        </div>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton className="w-8 p-0 justify-center cursor-pointer">
                        <MoreHorizontal className="h-4 w-4" />
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <a href="/project/settings">Project Settings</a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/project">
                    <Home className="h-4 w-4 opacity-50" />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/project/artifacts">
                    <Shapes className="h-4 w-4 opacity-50" />
                    <span>Artifacts</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarGroupLabel>Modules</SidebarGroupLabel>
            <SidebarMenu>
              {moduleItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <Box className="h-4 w-4 opacity-50" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator className="mx-0" />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="w-full cursor-pointer">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs">D</AvatarFallback>
                  </Avatar>
                  <span>Daniel</span>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <a href="/settings">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/subscription">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Subscription
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/legal">
                    <Scale className="h-4 w-4 mr-2" />
                    Legal
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/help">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Help
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

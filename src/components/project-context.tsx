"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export const projects = [
  { value: "hyperhedron", label: "Hyperhedron", color: "bg-rose-500" },
  { value: "redhat", label: "Redhat", color: "bg-red-500" },
  { value: "acme-rebrand", label: "Acme Rebrand", color: "bg-amber-500" },
  { value: "nike-campaign", label: "Nike Campaign", color: "bg-emerald-500" },
  { value: "spotify-refresh", label: "Spotify Refresh", color: "bg-green-500" },
  { value: "tesla-launch", label: "Tesla Launch", color: "bg-blue-500" },
];

type Project = (typeof projects)[number];

interface ProjectContextType {
  selectedProject: string;
  setSelectedProject: (project: string) => void;
  selectedProjectData: Project | undefined;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [selectedProject, setSelectedProject] = useState("hyperhedron");
  const selectedProjectData = projects.find((p) => p.value === selectedProject);

  return (
    <ProjectContext.Provider
      value={{ selectedProject, setSelectedProject, selectedProjectData }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
}

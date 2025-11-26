import { Settings } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function ProjectSettingsPage() {
  return (
    <div className="p-8">
      <PageHeader
        icon={<Settings />}
        title="Project Settings"
        description="Manage your project configuration and preferences."
      />
    </div>
  );
}

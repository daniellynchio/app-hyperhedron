import { Settings } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function WorkspaceSettingsPage() {
  return (
    <div className="p-8">
      <PageHeader
        icon={<Settings />}
        title="Workspace Settings"
        description="Manage your workspace configuration and preferences."
      />
    </div>
  );
}

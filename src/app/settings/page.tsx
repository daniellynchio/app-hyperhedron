import { Settings } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function SettingsPage() {
  return (
    <div className="p-8">
      <PageHeader
        icon={<Settings />}
        title="Settings"
        description="Manage your account settings and preferences."
      />
    </div>
  );
}

import { Bell } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function Notifications() {
  return (
    <div className="p-8">
      <PageHeader
        icon={<Bell />}
        title="Notifications"
        description="View and manage your notifications."
      />
    </div>
  );
}

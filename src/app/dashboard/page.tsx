import { LayoutDashboard } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function Dashboard() {
  return (
    <div className="p-8">
      <PageHeader
        icon={<LayoutDashboard />}
        title="Dashboard"
        description="Welcome to your workspace dashboard."
      />
    </div>
  );
}

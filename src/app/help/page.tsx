import { HelpCircle } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function HelpPage() {
  return (
    <div className="p-8">
      <PageHeader
        icon={<HelpCircle />}
        title="Help"
        description="Get help and support for using the platform."
      />
    </div>
  );
}

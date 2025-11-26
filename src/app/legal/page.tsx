import { Scale } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function LegalPage() {
  return (
    <div className="p-8">
      <PageHeader
        icon={<Scale />}
        title="Legal"
        description="Terms of service, privacy policy, and legal information."
      />
    </div>
  );
}

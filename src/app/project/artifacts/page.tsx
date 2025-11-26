import { Shapes } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function Artifacts() {
  return (
    <div className="p-8">
      <PageHeader
        icon={<Shapes />}
        title="Artifacts"
        description="Manage your project artifacts."
      />
    </div>
  );
}

import { Box } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function ConceptDevelopment() {
  return (
    <div className="p-8">
      <PageHeader
        icon={<Box />}
        title="Concept Development"
        description="Develop and iterate on your creative concepts."
      />
    </div>
  );
}

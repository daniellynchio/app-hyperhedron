import { Box } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function Prompts() {
  return (
    <div className="p-8">
      <PageHeader
        icon={<Box />}
        title="Prompts"
        description="Manage and organize your creative prompts."
      />
    </div>
  );
}

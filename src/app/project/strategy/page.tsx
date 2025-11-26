import { Box } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function Strategy() {
  return (
    <div className="p-8">
      <PageHeader
        icon={<Box />}
        title="Strategy"
        description="Define and refine your project strategy."
      />
    </div>
  );
}

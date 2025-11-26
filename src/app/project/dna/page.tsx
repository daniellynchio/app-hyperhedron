import { Box } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function CreativeDNA() {
  return (
    <div className="p-8">
      <PageHeader
        icon={<Box />}
        title="Creative DNA"
        description="Define the core creative identity of your project."
      />
    </div>
  );
}

import { Box } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function Discovery() {
  return (
    <div className="p-8">
      <PageHeader
        icon={<Box />}
        title="Discovery"
        description="Explore and discover insights for your project."
      />
    </div>
  );
}

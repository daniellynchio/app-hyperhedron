import { Box } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function CreativeDirection() {
  return (
    <div className="p-8">
      <PageHeader
        icon={<Box />}
        title="Creative Direction"
        description="Guide the visual and creative direction of your project."
      />
    </div>
  );
}

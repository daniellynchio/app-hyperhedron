import { Home } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function ProjectHome() {
  return (
    <div className="p-8">
      <PageHeader
        icon={<Home />}
        title="Project Home"
        description="Overview of your project."
      />
    </div>
  );
}

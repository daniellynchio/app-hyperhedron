import { CreditCard } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function SubscriptionPage() {
  return (
    <div className="p-8">
      <PageHeader
        icon={<CreditCard />}
        title="Subscription"
        description="Manage your subscription and billing."
      />
    </div>
  );
}

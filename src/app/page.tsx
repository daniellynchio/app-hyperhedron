import { Logo } from "@/components/logo";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <Logo size={120} className="text-muted-foreground/50" />
    </div>
  );
}

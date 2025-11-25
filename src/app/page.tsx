import { Hexagon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center gap-6 text-center">
        <Hexagon className="h-16 w-16 text-primary" />
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to Hyperhedron
        </h1>
        <p className="text-lg text-muted-foreground max-w-md">
          Your AI-powered workspace. Use the sidebar to navigate and the chat
          drawer on the right to interact with AI.
        </p>
      </div>
    </div>
  );
}

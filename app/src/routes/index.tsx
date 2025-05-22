import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/ModeToggle";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-background">
      <h1>John's Page</h1>
      <div className="card">
        <ModeToggle />
        <Button
          type="button"
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </Button>
      </div>
    </main>
  );
}

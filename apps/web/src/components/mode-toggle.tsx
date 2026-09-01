"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="size-9" disabled>
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      className="size-9 cursor-pointer"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Basculer le thème"
    >
      {isDark ? (
        <Sun className="size-4 text-amber-400 transition-all" />
      ) : (
        <Moon className="size-4 text-neutral-700 transition-all" />
      )}
    </Button>
  );
}

import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ModeToggle } from "./mode-toggle";

vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "light",
    setTheme: vi.fn(),
  }),
}));

describe("ModeToggle", () => {
  it("renders the button with the correct aria-label", () => {
    render(<ModeToggle />);
    const button = screen.getByRole("button", { name: /toggle theme/i });
    expect(button).toBeDefined();
  });
});

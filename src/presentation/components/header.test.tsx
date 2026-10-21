import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Header } from "./header";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const resumes = [
  {
    label: "Backend Resume",
    href: "/resume/ivan-genes-backend-resume.pdf",
    fileName: "ivan-genes-backend-resume.pdf",
  },
  {
    label: "Full-Stack Resume",
    href: "/resume/ivan-genes-full-stack-resume.pdf",
    fileName: "ivan-genes-full-stack-resume.pdf",
  },
];

describe("Header", () => {
  it("renders the primary navigation and both downloadable resumes", async () => {
    const user = userEvent.setup();
    const { container } = render(<Header navigation={navigation} resumes={resumes} />);

    const primaryNavigation = screen.getByRole("navigation", { name: "Primary navigation" });
    expect(primaryNavigation).toHaveTextContent("Work");
    expect(primaryNavigation).toHaveTextContent("Contact");

    const resumeSummary = screen.getByText("Resume", { selector: "summary" });
    const resumeMenu = resumeSummary.closest("details");

    expect(resumeMenu).not.toBeNull();
    await user.click(resumeSummary);

    const backendResume = within(resumeMenu as HTMLDetailsElement).getByRole("link", {
      name: "Backend Resume",
    });
    const fullStackResume = within(resumeMenu as HTMLDetailsElement).getByRole("link", {
      name: "Full-Stack Resume",
    });

    expect(backendResume).toHaveAttribute("href", "/resume/ivan-genes-backend-resume.pdf");
    expect(fullStackResume).toHaveAttribute("href", "/resume/ivan-genes-full-stack-resume.pdf");
    expect(backendResume).toHaveAttribute("download", "ivan-genes-backend-resume.pdf");
    expect(container.querySelector("details[open]")).toBeInTheDocument();
  });
});

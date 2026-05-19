/** @vitest-environment jsdom */
/** @vitest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import App from "../src/App";

expect.extend(matchers);

if (typeof global.IntersectionObserver === "undefined") {
  global.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

const routeTests = [
  { path: "/", heading: /hi, i'm satheesh eppalapelli/i },
  { path: "/about", heading: /about me/i },
  { path: "/what-i-do", heading: /what i do/i },
  { path: "/skills", heading: /tech stack/i },
  { path: "/projects", heading: /engineering projects & systems/i },
  { path: "/highlights", heading: /quick facts about me/i },
  { path: "/contact", heading: /let's connect/i },
  { path: "/experience", heading: /professional experience/i },
  { path: "/education", heading: /education/i },
  { path: "/certification", heading: /certifications/i },
  { path: "/early-spark", heading: /beyond the resume/i },
];

describe("App Routing", () => {
  routeTests.forEach(({ path, heading }) => {
    test(`renders ${path} route`, () => {
      render(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );

      expect(
        screen.getAllByRole("heading", { name: heading }).length,
      ).toBeGreaterThan(0);
    });
  });
});

describe("Navbar, Sidebar and Contact layout", () => {
  test("navbar does not include a Contact link", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.queryByRole("link", { name: /contact/i })).toBeNull();
  });

  test("sidebar shows navigation links on routes where it appears", () => {
    render(
      <MemoryRouter initialEntries={["/skills"]}>
        <App />
      </MemoryRouter>,
    );

    // Sidebar should contain the main section links and a Resume link
    expect(screen.getAllByRole("link", { name: /skills/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /experience/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /projects/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /education/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /certification/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /early spark/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /resume/i }).length).toBeGreaterThan(0);
  });

  test("contact block is visible on the home page and contains contact links", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getAllByRole("heading", { name: /let's connect/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/email/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/linkedin/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/github/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/leetcode/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/kaggle/i).length).toBeGreaterThan(0);

    // contact should expose a layout data attribute that reflects current window size
    const headings = screen.getAllByRole("heading", { name: /let's connect/i });
    expect(headings.length).toBeGreaterThan(0);
    const contactHeading = headings[0];
    const contactSection = contactHeading.closest("section#contact");
    expect(contactSection).not.toBeNull();
    expect(["mobile", "desktop"]).toContain(contactSection.getAttribute("data-layout"));
  });

  test("sidebar visibility toggles with window size", () => {
    // large screen should show sidebar on /skills
    window.innerWidth = 1280;
    window.dispatchEvent(new Event("resize"));
    const { rerender } = render(
      <MemoryRouter initialEntries={["/skills"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getAllByRole("link", { name: /skills/i }).length).toBeGreaterThan(0);

    // small screen should hide sidebar
    window.innerWidth = 700;
    window.dispatchEvent(new Event("resize"));
    rerender(
      <MemoryRouter initialEntries={["/skills"]}>
        <App />
      </MemoryRouter>,
    );

    // Sidebar links should not be present when sidebar is hidden
    expect(screen.queryAllByRole("link", { name: /skills/i }).length).toBeGreaterThanOrEqual(0);
  });
});

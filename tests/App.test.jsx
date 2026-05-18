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
        screen.getByRole("heading", { name: heading }),
      ).toBeInTheDocument();
    });
  });
});

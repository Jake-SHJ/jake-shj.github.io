import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

Object.defineProperty(window, "matchMedia", {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    };
  },
});

test("render", () => {
  const { getByText } = render(<App />);
});

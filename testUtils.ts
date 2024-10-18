import React from "react";
import { createRoot } from "react-dom/client";
import { render } from "@testing-library/react";

const renderWithRoot = (ui: React.ReactElement) => {
  const container = document.createElement("div");
  const root = createRoot(container);
  root.render(ui);
  return {
    ...render(ui, { container }),
  };
};

export * from "@testing-library/react";
export { renderWithRoot as render };

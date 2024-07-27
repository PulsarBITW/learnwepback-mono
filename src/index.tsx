import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/features/App";

const rootHtml = document.getElementById("root");
if (!rootHtml) {
  console.log("root is missing in DOM");
} else {
  const reactRoot = ReactDOM.createRoot(rootHtml);
  reactRoot.render(<App />);
}

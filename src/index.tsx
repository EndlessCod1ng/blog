import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./app/css/index.scss";
import { App } from "./app/App";
import { ThemeProvider } from "./app/Providers/ThemeProvider/ui/ThemeProvider";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App className="app" />
    </BrowserRouter>
  </ThemeProvider>
);

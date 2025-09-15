import { createRoot } from "react-dom/client";

import "./app/css/index.scss";
import { App } from "./app/App";



const root = createRoot(document.getElementById("root"));
root.render(<App className="app" />);

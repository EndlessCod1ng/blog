import { createRoot } from "react-dom/client";
import { Counter } from "./components/Counter/Counter";

function App() {
  return (
    <div>
      Hello World
      <Counter />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

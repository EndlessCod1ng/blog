import { Counter } from "../components/Counter/Counter";

interface AppProps {
  className?: string;
}
export const App = ({ className }: AppProps) => {
  return (
    <div className={`${className ? className : ""}`}>
      <div>App</div>
      <Counter />
    </div>
  );
};

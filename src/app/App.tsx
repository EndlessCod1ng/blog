import { Link, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ProfilePage } from "../pages/ProfilePage";
import { Suspense, useState } from "react";

interface AppProps {
  className?: string;
}
type Theme = "light" | "dark";
export const App = ({ className }: AppProps) => {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <div className={`app_${theme}_theme ${className ? className : ""}`}>
      <Link to={"/"}>Home</Link>
      <Link to={"/profile"}>Profile</Link>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        ChangeTHeme
      </button>

      <Suspense fallback="loading...">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
          <Route
            path="*"
            element={<HomePage />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};

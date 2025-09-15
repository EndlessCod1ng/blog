import { Link, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ProfilePage } from "../pages/ProfilePage";
import { Suspense } from "react";

interface AppProps {
  className?: string;
}
export const App = ({ className }: AppProps) => {
  return (
    <div className={`${className ? className : ""}`}>
      <div>App</div>
      <Link to={"/"}>Home</Link>
      <Link to={"/profile"}>Profile</Link>

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

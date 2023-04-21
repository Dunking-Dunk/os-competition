import "./App.css";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";

import HomeScreen from "./pages/home/Home";
import ExplorerScreen from "./pages/file-Explorer/Explorer";
import LoaderScreen from "./components/Loader/Loader";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <div className="root__container">
        <LoaderScreen />
        <BrowserRouter>
          <Routes>
            <Route element={<HomeScreen />} path="/" />
            <Route element={<ExplorerScreen />} path="/explorer" />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

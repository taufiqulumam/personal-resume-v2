import React, { useEffect } from "react";
import "./App.css";
import PortfolioDashboard from "./components/portfolio-dashboard";
import { initGA, logPageView } from "./ga";
import { ThemeProvider } from "./contexts/ThemeContext";

const App: React.FC = () => {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <PortfolioDashboard />
      </div>
    </ThemeProvider>
  );
};

export default App;

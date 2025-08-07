import React, { useEffect } from "react";
import "./App.css";
import PortfolioDashboard from "./components/portfolio-dashboard";
import { initGA, logPageView } from "./ga";

const App: React.FC = () => {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  return (
    <div className="App">
      <PortfolioDashboard />
    </div>
  );
};

export default App;

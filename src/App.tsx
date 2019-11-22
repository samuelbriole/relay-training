import React from "react";
import "./App.css";
import { MyPage } from "./MyPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MyPage />
      </header>
    </div>
  );
};

export default App;

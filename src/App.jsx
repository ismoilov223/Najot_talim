import { useState } from "react";
import "./App.css";
import CurseHeader from "./pages/Curse/Components/CurseHeader/CurseHeader";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CurseHeader />
    </div>
  );
}

export default App;

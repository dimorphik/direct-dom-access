import Tilter from "./components/Tilter";
import TilterData from "./components/TilterData";
import { useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState({});
  return (
    <div className="App">
      <p>Touching the box will transform its perspective.</p>
      <Tilter setData={setData}>
        <TilterData data={data} />
      </Tilter>
    </div>
  );
}

export default App;

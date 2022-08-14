import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Errand from "./pages/Errand";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Errand />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <h1>Hello my project</h1>
    </>
  );
}

export default App;

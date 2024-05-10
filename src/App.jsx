import "./App.css";
import Home from "./pages/Home/Home";
import { GlobalStyle } from "./styles/GlobalStyles";
import ParticlesComponent from "./particles";
function App() {
  return (
    <>
      <GlobalStyle />

      <Home />
    </>
  );
}

export default App;

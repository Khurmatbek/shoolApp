import "./App.css";
import Home from "./pages/Home/Home";
import { GlobalStyle } from "./styles/GlobalStyles";
import ParticlesComponent from "./particles";
import {} from "./theme/theme";
function App() {
  return (
    <>
      <ParticlesComponent id="particles" />
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;

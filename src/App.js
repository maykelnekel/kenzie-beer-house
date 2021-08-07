import Nav from "./components/nav";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Container } from "./styled";
import { Reset } from "styled-reset";

function App() {
  return (
    <Container>
      <Reset />
      <Nav />
      <Routes />
      <ToastContainer />
    </Container>
  );
}

export default App;

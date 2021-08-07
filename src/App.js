import Nav from "./components/nav";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Container, Main } from "./styled";
import { Reset } from "styled-reset";

function App() {
  return (
    <Container>
      <Reset />
      <Nav />
      <Main>
        <Routes />
        <ToastContainer />
      </Main>
    </Container>
  );
}

export default App;

import Nav from "./components/nav";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Nav />
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;

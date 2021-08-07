import { useHistory } from "react-router-dom";
import { About, Container } from "./styles";

const Home = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/products");
  }
  return (
    <Container>
      <About>
        <div>
          <h1>A easy way to buy drinks for your event</h1>
          <p>Make a list and don't forget annything!</p>
        </div>
        <button onClick={handleClick}>Our products</button>
      </About>
    </Container>
  );
};
export default Home;

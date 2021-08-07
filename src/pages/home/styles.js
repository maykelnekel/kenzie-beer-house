import styled from "styled-components";

export const Container = styled.main`
  margin-top: 4rem;

  background-image: url("../assets/images/fundo-home.jpg");
`;
export const About = styled.section`
  width: 100vw;
  height: 500px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  h1 {
    width: 94vw;
    font-size: 2rem;
    font-weight: 700;
    padding: 3vw;
    background-color: tomato;
  }
  p {
    font-size: 1rem;
    width: 90%;
    margin-top: 1rem;
    padding: 0;
    line-height: 1.2rem;
    margin-left: 3vw;
  }

  button {
    background-color: tomato;
    width: 250px;
    height: 40px;
    border: none;
    color: whitesmoke;
    text-transform: uppercase;
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: bold;
  }
  button:hover {
    cursor: pointer;
    background-color: gray;
  }
`;

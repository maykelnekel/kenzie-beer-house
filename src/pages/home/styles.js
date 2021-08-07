import styled from "styled-components";

export const Container = styled.main`
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
    font-size: 2rem;
    font-weight: 700;
    /* width: 100vw; */
    padding: 1rem;
    background-color: tomato;
  }
  p {
    font-size: 1rem;
    width: 100%;
    margin-top: 1rem;
    padding: 0 1rem;
    line-height: 1.2rem;
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

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  :first-child {
    margin-top: 5rem;
  }
`;
export const ContainerCard = styled.div`
  border-bottom: 1px solid gray;
  width: 100%;
  max-width: 400px;
  padding: 1rem 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 728px) {
    margin: 1rem;
  }
`;
export const ContainerButton = styled.div`
  margin-top: 1rem;
  button {
    background-color: transparent;
    border: 1px solid tomato;
    width: 200px;
    padding: 0.5rem;
    color: tomato;
    text-transform: uppercase;
    :hover {
      background-color: tomato;
      color: whitesmoke;
    }
  }
`;

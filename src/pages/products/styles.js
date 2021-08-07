import styled from "styled-components";
export const Container = styled.div`
  :first-child {
    margin-top: 5rem;
  }

  @media (min-width: 728px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const ContainerCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 1rem 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid gray;
  @media (min-width: 728px) {
    margin: 1rem;
  }
`;
export const InputContainer = styled.div`
  margin-top: 1rem;
  button {
    background-color: tomato;
    border: 2px solid tomato;
    width: 130px;
    padding: 0.5rem;
    color: white;
    text-transform: uppercase;
  }
  input {
    width: 110px;
    padding: 0.5rem;
    border-radius: none;
    margin-right: 0.5rem;
  }
`;

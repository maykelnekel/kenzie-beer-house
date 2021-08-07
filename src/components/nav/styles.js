import styled from "styled-components";

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2.5rem;
  color: gray;
`;

export const Barra = styled.div`
  position: fixed;
  right: 1rem;
  top: 1rem;
  font-family: "Roboto", sans-serif;
`;

export const Menu = styled.ul`
  padding: 0;
  background-color: gray;
  height: 80vh;
`;

export const Page = styled.li`
  text-transform: uppercase;
  font-weight: lighter;
  width: 115px;
  text-align: center;
  padding: 0.1rem 0.3rem;
  list-style-type: none;

  div:hover {
    background-color: tomato;
  }
  a:link,
  a:visited,
  a:active {
    color: white;
    text-decoration: none;
  }
`;

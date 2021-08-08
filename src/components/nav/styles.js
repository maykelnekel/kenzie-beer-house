import styled from "styled-components";

export const Container = styled.div``;

export const Barra = styled.div`
  font-family: "Roboto", sans-serif;
  position: fixed;
  width: 100%;
  height: 4rem;
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;
export const Title = styled.h1`
  color: whitesmoke;
  font-size: 1.5rem;
  font-weight: bolder;
  margin-left: 0.5rem;
  span {
    font-size: 1.8rem;
    padding-right: 1rem;
    margin-right: 1rem;
    border-right: 1px solid white;
  }
  a:link,
  a:visited,
  a:active {
    color: white;
    text-decoration: none;
  }
`;
export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2.5rem;
  color: whitesmoke;
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 0.5rem;
  :hover {
    cursor: pointer;
  }
`;

export const Menu = styled.ul`
  padding: 0;
  background-color: gray;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 4rem;
`;

export const Page = styled.li`
  text-transform: uppercase;
  font-weight: lighter;
  width: 115px;
  height: 2rem;
  text-align: center;
  padding: 0.1rem 0.3rem;
  list-style-type: none;
  :first-child {
    margin-top: 1rem;
  }
  div:hover {
    background-color: tomato;
    padding-top: 0.1rem;
  }
  a:link,
  a:visited,
  a:active {
    color: white;
    text-decoration: none;
  }
`;

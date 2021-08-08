import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: space-between;
  justify-content: center;
  color: gray;
  position: relative;
`;

export const IntraContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5rem;
  width: 60%;
`;

export const Image = styled.img`
  width: 18%;
  height: 220px;
`;

export const Name = styled.h3`
  text-align: center;
  font-weight: bold;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  border-bottom: 2px solid gray;
  border-top: 2px solid gray;
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

export const Description = styled.p`
  font-size: 1rem;
  text-transform: none;
  padding: 0.5rem;
  background-color: tomato;
  line-height: 1.2rem;
  color: white;
  margin: 0;
  @media (min-width: 850px) {
    position: absolute;
    bottom: 2rem;
    box-shadow: 0 0 30px 1px gray;
  }
`;
export const Button = styled.button`
  background-color: transparent;
  width: 125px;
  height: 1.5rem;
  border: none;
  color: tomato;
  padding: 0;
  div {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    p {
      margin-right: 0.5rem;
    }
  }
`;
export const Brewed = styled.li`
  font-size: 1rem;
  margin: 0.5rem 0;
  border-top: 2px solid gray;
  padding-top: 0.5rem;
`;
export const Amount = styled.li`
  font-size: 1rem;
  margin: 0.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid gray;
`;
export const Ul = styled.ul``;

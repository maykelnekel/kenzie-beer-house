import {
  Container,
  Image,
  Name,
  Brewed,
  Amount,
  Description,
  Button,
  IntraContainer,
} from "./styles.js";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { useState } from "react";
const Card = ({ unit, image, name, brewed, description, volume }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Container>
      <Image src={image} alt={name}></Image>
      <IntraContainer>
        <Name>{name}</Name>
        <Brewed>Brewed: {brewed}</Brewed>
        <Button onClick={() => setShowDescription(!showDescription)}>
          {showDescription ? "Description" : "Description"}
          {showDescription ? <BiHide /> : <BiShowAlt />}
        </Button>
        {showDescription && <Description>{description}</Description>}
        <Amount>
          Inventory amount: {volume}
          {unit}
        </Amount>
      </IntraContainer>
    </Container>
  );
};
export default Card;

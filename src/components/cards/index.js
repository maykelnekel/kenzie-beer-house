import {
  Container,
  Image,
  Name,
  Brewed,
  Amount,
  Description,
  Button,
  IntraContainer,
  Ul,
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

        <Ul>
          <Brewed>Brewed: {brewed}</Brewed>
          <Amount>
            Inventory amount: {volume}
            <span>{unit}</span>
          </Amount>
        </Ul>
        <Button onClick={() => setShowDescription(!showDescription)}>
          {showDescription ? (
            <div>
              <p>View description</p> <BiHide size="18" />
            </div>
          ) : (
            <div>
              <p>View description</p>
              <BiShowAlt size="18" />
            </div>
          )}
        </Button>
        {showDescription && <Description>{description}</Description>}
      </IntraContainer>
    </Container>
  );
};
export default Card;

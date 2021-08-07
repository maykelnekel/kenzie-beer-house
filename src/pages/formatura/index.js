import Card from "../../components/cards";
import RemoveButton from "../../components/removeButton";
import { useFormatura } from "../../providers/formatura/inde";
import { Container, ContainerCard, ContainerButton } from "./styles";

const Formatura = () => {
  const { formaturaLista, setFormaturaLista } = useFormatura();

  return (
    <Container>
      {formaturaLista.map((item, index) => (
        <ContainerCard key={index}>
          <Card
            image={item.image_url}
            name={item.name}
            brewed={item.first_brewed}
            description={item.description}
            volume={item.volume.value}
            unit={item.volume.unit}
          />
          <ContainerButton>
            <RemoveButton
              lista={formaturaLista}
              setLista={setFormaturaLista}
              product={item}
              productIndex={index}
            />
          </ContainerButton>
        </ContainerCard>
      ))}
    </Container>
  );
};
export default Formatura;

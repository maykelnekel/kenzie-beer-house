import Card from "../../components/cards";

import RemoveButton from "../../components/removeButton";
import { useCasamento } from "../../providers/casamento";
import { Container, ContainerButton, ContainerCard } from "./styles";

const Casamento = () => {
  const { casamentoLista, setCasamentoLista } = useCasamento();

  return (
    <Container>
      {casamentoLista.map((item, index) => (
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
              product={item}
              lista={casamentoLista}
              setLista={setCasamentoLista}
              productIndex={index}
            />
          </ContainerButton>
        </ContainerCard>
      ))}
    </Container>
  );
};
export default Casamento;

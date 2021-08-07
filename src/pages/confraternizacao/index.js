import Card from "../../components/cards";
import RemoveButton from "../../components/removeButton";
import { useConfrat } from "../../providers/confraternizacao";
import { Container, ContainerCard, ContainerButton } from "./styles";

const Confraternizacao = () => {
  const { confratLista, setConfratLista } = useConfrat();

  return (
    <Container>
      {confratLista.map((item, index) => (
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
              lista={confratLista}
              setLista={setConfratLista}
              productIndex={index}
            />
          </ContainerButton>
        </ContainerCard>
      ))}
    </Container>
  );
};
export default Confraternizacao;

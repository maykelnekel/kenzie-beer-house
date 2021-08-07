import Card from "../../components/cards";
import { useProducts } from "../../providers/products/inde";
import { useState } from "react";
import { useCasamento } from "../../providers/casamento";
import { useConfrat } from "../../providers/confraternizacao";
import { useFormatura } from "../../providers/formatura/inde";
import { toast } from "react-toastify";
import { ContainerCard, Container, InputContainer } from "./styles";

const Products = () => {
  const { productsList } = useProducts();
  const { casamentoLista, setCasamentoLista } = useCasamento();
  const { confratLista, setConfratLista } = useConfrat();
  const { formaturaLista, setFormaturaLista } = useFormatura();
  const [event, setEvent] = useState("");

  const handleClick = (item) => {
    switch (event) {
      case "Wedding":
        setCasamentoLista([...casamentoLista, item]);
        setEvent("");
        toast.success(`${item.name} added from ${event}`);
        break;

      case "Party":
        setConfratLista([...confratLista, item]);
        setEvent("");
        toast.success(`Produto adicionado à ${event}`);
        break;

      case "Graduation":
        setFormaturaLista([...formaturaLista, item]);
        setEvent("");
        toast.success(`Produto adicionado à ${event}`);
        break;

      default:
        break;
    }
  };
  return (
    <Container>
      {productsList.map((item) => (
        <ContainerCard key={item.id}>
          <Card
            image={item.image_url}
            name={item.name}
            brewed={item.first_brewed}
            description={item.description}
            volume={item.volume.value}
            unit={item.volume.unit}
          />
          <InputContainer>
            <input
              placeholder="Events &darr;"
              list="events"
              value={event}
              onChange={(event) => setEvent(event.target.value)}
            />
            <datalist id="events">
              <option value="Wedding" />
              <option value="Party" />
              <option value="Graduation" />
            </datalist>
            <button onClick={() => handleClick(item)}>Add to list</button>
          </InputContainer>
        </ContainerCard>
      ))}
    </Container>
  );
};
export default Products;

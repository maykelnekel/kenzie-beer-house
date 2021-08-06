import Card from "../../components/cards";
import RemoveButton from "../../components/removeButton";
import { useCasamento } from "../../providers/casamento";

const Casamento = () => {
  const { casamentoLista, setCasamentoLista } = useCasamento();

  return (
    <div>
      {casamentoLista.map((item, index) => (
        <div key={index}>
          <Card
            image={item.image_url}
            name={item.name}
            brewed={item.first_brewed}
            description={item.description}
            volume={item.volume.value}
            unit={item.volume.unit}
          />
          <div>
            <RemoveButton
              product={item}
              lista={casamentoLista}
              setLista={setCasamentoLista}
              productIndex={index}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Casamento;

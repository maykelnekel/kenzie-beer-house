import Card from "../../components/cards";
import RemoveButton from "../../components/removeButton";
import { useConfrat } from "../../providers/confraternizacao";

const Confraternizacao = () => {
  const { confratLista, setConfratLista } = useConfrat();

  return (
    <div>
      {confratLista.map((item, index) => (
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
              lista={confratLista}
              setLista={setConfratLista}
              productIndex={index}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Confraternizacao;

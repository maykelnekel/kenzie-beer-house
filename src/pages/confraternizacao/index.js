import Card from "../../components/cards";
import { useConfrat } from "../../providers/confraternizacao";

const Confraternizacao = () => {
  const { confratLista } = useConfrat();

  return (
    <div>
      {confratLista.map((item) => (
        <div key={item.id}>
          <Card
            image={item.image_url}
            name={item.name}
            brewed={item.first_brewed}
            description={item.description}
            volume={item.volume.value}
            unit={item.volume.unit}
          />
          <div>
            <button>Remove from list</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Confraternizacao;

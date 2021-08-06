import Card from "../../components/cards";
import { useFormatura } from "../../providers/formatura/inde";

const Formatura = () => {
  const { formaturaLista } = useFormatura();

  return (
    <div>
      {formaturaLista.map((item) => (
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
export default Formatura;

import Card from "../../components/cards";
import RemoveButton from "../../components/removeButton";
import { useFormatura } from "../../providers/formatura/inde";

const Formatura = () => {
  const { formaturaLista, setFormaturaLista } = useFormatura();

  return (
    <div>
      {formaturaLista.map((item, index) => (
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
              lista={formaturaLista}
              setLista={setFormaturaLista}
              product={item}
              productIndex={index}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Formatura;

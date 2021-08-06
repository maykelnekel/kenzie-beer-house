import { toast } from "react-toastify";

const RemoveButton = ({ lista, setLista, product, productIndex }) => {
  const handleRemove = (data) => {
    const filter = lista.filter((element, index) => index !== productIndex);
    toast.warn(`You remove ${product.name} from list!`);
    return setLista(filter);
  };

  return (
    <button onClick={() => handleRemove(product)}>Remove from list</button>
  );
};
export default RemoveButton;

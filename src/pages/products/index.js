import { useProducts } from "../../providers/products/inde";
import Card from "../../components/cards";
import { useState } from "react";
const Products = () => {
  const { productsList } = useProducts();
  const [event, setEvent] = useState("");

  const handleClick = () => {
    console.log(event);
    setEvent("");
  };
  return (
    <div>
      {productsList.map((item) => (
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
            <input
              placeholder="Events"
              list="events"
              value={event}
              onChange={(event) => setEvent(event.target.value)}
            />
            <datalist id="events">
              <option value="Wedding" />
              <option value="Party" />
              <option value="Graduation" />
            </datalist>
            <button onClick={handleClick}>Add list</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Products;

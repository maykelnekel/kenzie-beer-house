import { useProducts } from "../../providers/products/inde";
import Card from "../../components/cards";
const Products = () => {
  const { productsList } = useProducts();
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
        </div>
      ))}
    </div>
  );
};
export default Products;

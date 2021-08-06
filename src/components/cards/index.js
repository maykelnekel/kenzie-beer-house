const Card = ({ unit, image, name, brewed, description, volume }) => {
  return (
    <div>
      <img src={image} alt={name}></img>
      <h3>{name}</h3>
      <p>Brewed: {brewed}</p>
      <p>{description}</p>
      <p>
        Inventory amount: {volume}
        {unit}
      </p>
    </div>
  );
};
export default Card;

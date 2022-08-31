import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(
      "https://fortnite-api.com/v2/cosmetics/br/new"
    );
    const data = await response.json();
    console.log(data.data.items);
    setItems(data.data.items);
  };

  return (
    <>
      <h1>Shop Page</h1>
      <ul>
        {items.map((item) => (
          <li>
            <Link to={`/shop/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Shop;

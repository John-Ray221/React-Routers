import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const itemDetails = () => {
  const [item, setItem] = useState({});
  let image = [];
  const { id } = useParams();
  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const response = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/${id}`
    );
    const data = await response.json();

    console.log(data.data);
    setItem(data.data);
  };
  return (
    <>
      <h1>{item.name}</h1>s
    </>
  );
};

export default itemDetails;

import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--backend-vinted--5nymxkyhzx9t.code.run/offer"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>now loading...</p>
  ) : (
    <div>
      {data.offers.map((offer, index) => {
        return (
          <div key={offer._id}>
            <p>{offer.product_name}</p>
            <p>{offer.product_description}</p>
            <img src={offer.product_image} alt="produit en vente" />
            <p>{offer.product_price}€</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

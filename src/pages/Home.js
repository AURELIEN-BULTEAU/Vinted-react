import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
          <Link key={offer._id} to={`/offer/${offer._id}`}>
            <p>{offer.product_name}</p>{" "}
            <img src={offer.product_image.secure_url} alt="produit en vente" />
            <p>{offer.product_price}€</p>
            {offer.product_details.map((element, index) => {
              return element.TAILLE && <p key={index}>{element.TAILLE}</p>;
            })}
            {offer.product_details.map((element, index) => {
              return element.MARQUE && <p key={index}>{element.MARQUE}</p>;
            })}
            {/* <p>{offer.owner}</p> */}
          </Link>
        );
      })}
    </div>
  );
};

export default Home;

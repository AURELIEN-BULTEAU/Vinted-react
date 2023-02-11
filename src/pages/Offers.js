import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Offers = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--backend-vinted--5nymxkyhzx9t.code.run/offer/" +
            param.Id
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [param.Id]);
  return isLoading ? (
    <p>now is loading...</p>
  ) : (
    <div>
      <h1>{data.product_name}</h1>
      {data.product_details.map((detail, index) => {
        const keyName = Object.keys(detail);
        console.log(keyName);
        return (
          <div key={index}>
            <span>{keyName[0]}</span>
            <span>{detail[keyName[0]]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Offers;

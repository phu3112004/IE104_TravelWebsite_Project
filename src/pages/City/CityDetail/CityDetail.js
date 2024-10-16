import { useParams } from "react-router-dom";

function CityDetail() {
  const { city } = useParams();
  return <h1>welcome to {city}</h1>;
}

export default CityDetail;

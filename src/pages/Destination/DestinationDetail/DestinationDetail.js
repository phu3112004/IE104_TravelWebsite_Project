import { useParams } from "react-router-dom";

function DestinationDetail() {
  const { country } = useParams();
  return <h1>welcome to {country}</h1>;
}

export default DestinationDetail;

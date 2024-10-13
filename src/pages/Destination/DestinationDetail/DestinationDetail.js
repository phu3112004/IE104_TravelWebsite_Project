import { useParams } from "react-router-dom";

function DestinationDetail() {
  const { country } = useParams();
  return <h1>Welcome to {country}</h1>;
}

export default DestinationDetail;

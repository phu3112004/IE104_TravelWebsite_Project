import { useParams } from "react-router-dom";

function AdventureDetail() {
  const { type } = useParams();
  return <h1>detail of {type}</h1>;
}

export default AdventureDetail;

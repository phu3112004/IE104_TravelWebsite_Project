import { useParams } from "react-router-dom";

function SceneryDetail() {
  const { scenery } = useParams();
  return <h1>welcome to {scenery}</h1>;
}

export default SceneryDetail;

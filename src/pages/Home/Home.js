import Divider from "../../components/Divider";
import About from "./About";
import Find from "./Find";
import Slide from "./Slide";
import Tour from "./Tour";
function Home() {
  return (
    <div>
      <Slide />
      <Find />
      <About />
      <Divider />
      <Tour />
    </div>
  );
}

export default Home;

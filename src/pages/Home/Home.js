import Divider from "../../components/Divider";
import About from "./About";
import Blog from "./Blog";
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
      <Blog />
    </div>
  );
}

export default Home;

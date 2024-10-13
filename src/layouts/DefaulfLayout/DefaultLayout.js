import Footer from "../../components/Footer";
import Header from "../../components/Header";
function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div> {children}</div>
      <Footer />
    </>
  );
}

export default DefaultLayout;

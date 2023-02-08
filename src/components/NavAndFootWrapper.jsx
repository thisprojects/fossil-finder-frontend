import Navbar from "./Navbar";
import Footer from "./Footer";

const NavAndFootWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default NavAndFootWrapper;

import { Outlet } from "react-router-dom";
import NavBar from "../component/Navbar";
// import Footer from "../components/footer/Footer";

function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default Root;
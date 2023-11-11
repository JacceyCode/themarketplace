import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <section className="font-bodyFont">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}

export default AppLayout;

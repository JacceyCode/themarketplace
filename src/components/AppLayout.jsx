// import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <section className="font-bodyFont">
      <Header />
      {/* <ScrollRestoration /> */}
      {/* <Outlet /> */}
      <Footer />
    </section>
  );
}

export default AppLayout;

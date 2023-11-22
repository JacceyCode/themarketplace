import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function AppLayout() {
  return (
    <section className="font-bodyFont">
      <Header />
      <ScrollToTop />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </section>
  );
}

export default AppLayout;

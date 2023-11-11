import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <section className="font-bodyFont">
      <Header />
      <Outlet />
    </section>
  );
}

export default AppLayout;

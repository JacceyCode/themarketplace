// import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
// import Products from "../components/Products";
// import { useEffect, useState } from "react";

function Home() {
  // const [products, setProducts] = useState([]);
  // const data = useLoaderData();

  // useEffect(() => {
  //   setProducts(data.data);
  // }, [data]);

  return (
    <main>
      <Banner />
      {/* <Products products={products} /> */}
    </main>
  );
}

export default Home;

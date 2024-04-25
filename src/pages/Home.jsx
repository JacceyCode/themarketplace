import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Products from "../components/Products";

function Home() {
  const data = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  return (
    <main>
      <Banner />
      <Products products={products} />
    </main>
  );
}

export default Home;

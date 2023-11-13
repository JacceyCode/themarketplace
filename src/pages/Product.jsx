import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Product() {
  const [details, setDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, [location]);

  return <div>Product</div>;
}

export default Product;

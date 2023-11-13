import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

function Cart() {
  const productData = useSelector((store) => store.market.productData);
  const [totalAmt, setTotalAmt] = useState();

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  return (
    <section>
      <img
        className="h-60 w-full object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg"
        alt="cartImg"
      />

      <section className="mx-auto flex max-w-[1280px] py-20">
        <CartItem />

        <section className="w-1/3 bg-[#fafafa] px-4 py-6">
          <section className="flex flex-col gap-6 border-b border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal{" "}
              <span className="font-titleFont text-lg font-bold">
                $ {totalAmt}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping{" "}
              <span className="font-titleFont text-lg font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </p>
          </section>
          <p className="font-titleFont mt-6 flex justify-between font-semibold">
            Total <span className="text-xl font-bold">$ {totalAmt}</span>
          </p>
          <button className="mt-6 w-full bg-black py-3 text-base text-white duration-300 hover:bg-gray-800">
            Proceed to checkout
          </button>
        </section>
      </section>
    </section>
  );
}

export default Cart;

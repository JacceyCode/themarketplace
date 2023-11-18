import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import CartItem from "../components/CartItem";

function Cart() {
  const productData = useSelector((store) => store.market.productData);
  const userInfo = useSelector((store) => store.market.userInfo);
  const [totalAmt, setTotalAmt] = useState();
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please Sign In to Checkout");
    }
  };

  return (
    <section>
      <img
        className="h-60 w-full object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg"
        alt="cartImg"
      />

      <section className="mx-auto flex max-w-[1280px] flex-col py-20 laptop:flex-row">
        <CartItem />

        <section className="bg-[#fafafa] px-4 py-6 laptop:w-1/3">
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
          <p className="mt-6 flex justify-between font-titleFont font-semibold">
            Total <span className="text-xl font-bold">$ {totalAmt}</span>
          </p>
          <button
            onClick={handleCheckOut}
            // disabled={!userInfo}
            className="mt-6 w-full bg-black py-3 text-base text-white duration-300 hover:bg-gray-800"
          >
            {/* {userInfo ? "Proceed to checkout" : "Sign in to checkout"} */}
            Proceed to checkout
          </button>

          {payNow && (
            <section className="mt-6 flex w-full items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51OCN8SFrqnEhzr3vm5joLKAOYU6sNV98XaAcxe9YdwzxcxA5wNWR10cvHSgektP0NJo2xvTYaT7thul8ZmzBD0Uj00JLMxNbJ7"
                name="D Market Place"
                amount={totalAmt * 100}
                label="Pay to DMarket"
                description={`Your payment amount is $${totalAmt}`}
                // token={payment}
                email={userInfo.email}
              />
            </section>
          )}
        </section>
      </section>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
}

export default Cart;

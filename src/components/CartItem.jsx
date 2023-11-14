import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import {
  decrementQuantity,
  deleteItem,
  increamentQuantity,
  resetCart,
} from "../redux/dMarketPlaceSlice";

function CartItem() {
  const dispatch = useDispatch();
  const productData = useSelector((store) => store.market.productData);

  return (
    <section className="w-2/3 pr-10">
      <section className="w-full">
        <h2 className="font-titleFont text-2xl">Shopping Cart</h2>
      </section>

      {productData.length === 0 ? (
        <p className="mt-6 text-lg italic">Cart is currently empty.</p>
      ) : (
        <>
          <section>
            {productData.map((item) => (
              <section
                key={item._id}
                className="mt-6 flex items-center justify-between gap-6"
              >
                <section className="flex items-center gap-2">
                  <AiOutlineClose
                    onClick={() => {
                      dispatch(deleteItem(item));
                      toast.error(`${item.title} was deleted from cart.`);
                    }}
                    className="cursor-pointer text-xl text-gray-600 duration-300 hover:text-red-600"
                  />

                  <img
                    className="h-32 w-32 object-cover"
                    src={item.image}
                    alt="productImg"
                  />
                </section>
                <h2 className="w-52">{item.title}</h2>
                <p className="w-10">{item.price}</p>

                <section className="flex w-52 items-center justify-between gap-4 border p-3 text-gray-500">
                  <p className="text-sm">Quantity</p>
                  <section className="flex items-center gap-4 text-sm font-semibold">
                    <button
                      onClick={() => dispatch(decrementQuantity(item))}
                      className="flex h-5 cursor-pointer items-center justify-center border px-2 text-lg font-normal duration-300 hover:bg-gray-700 hover:text-white active:bg-black"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => dispatch(increamentQuantity(item))}
                      className="flex h-5 cursor-pointer items-center justify-center border px-2 text-lg font-normal duration-300 hover:bg-gray-700 hover:text-white active:bg-black"
                    >
                      +
                    </button>
                  </section>
                </section>

                <p className="w-14">${item.quantity * item.price}</p>
              </section>
            ))}
          </section>

          <button
            onClick={() => {
              dispatch(resetCart());
              toast.success("Cart was cleared successfully.");
            }}
            className="ml-7 mt-8 bg-red-500 px-6 py-1 text-white duration-300 hover:bg-red-800"
          >
            Clear cart
          </button>
        </>
      )}

      <Link
        to="/"
        className="ml-7 mt-8 flex items-center gap-1 text-gray-400 duration-300 hover:text-black"
      >
        <span>
          <AiOutlineArrowLeft />
        </span>
        Continue shopping
      </Link>

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

export default CartItem;

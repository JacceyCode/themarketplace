import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa6";
import { addToCart } from "../redux/dMarketPlaceSlice";
import { ToastContainer, toast } from "react-toastify";

function Product() {
  const [details, setDetails] = useState({});
  const [baseQty, setBaseQty] = useState(1);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    setDetails(location.state.item);
  }, [location]);

  return (
    <section>
      <section className="mx-auto my-10 flex max-w-[1280px] gap-10">
        <section className="relative w-2/5">
          <img
            className="h-full w-full object-cover"
            src={details.image}
            alt="product image"
          />

          <section className="absolute right-0 top-4">
            {details.isNew && (
              <p className="font-titleFont bg-black px-6 py-1 font-semibold text-white">
                Sale
              </p>
            )}
          </section>
        </section>

        <section className="flex w-3/5 flex-col justify-center gap-12">
          <section>
            <h2 className="text-4xl font-semibold">{details.title}</h2>
            <section className="mt-3 flex items-center gap-4">
              <p className="font-base text-gray-500 line-through">
                ${details.oldPrice}
              </p>
              <p className="text-2xl font-medium text-gray-900">
                ${details.price}
              </p>
            </section>
          </section>

          <section className="flex items-center gap-2 text-base">
            <section className="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </section>
            <p className="text-xs text-gray-500">(1 Customer review)</p>
          </section>

          <p className="-mt-3 text-base text-gray-500">{details.description}</p>

          <section className="flex items-center gap-4">
            <section className="flex w-52 items-center justify-between gap-4 border p-3 text-gray-500">
              <p className="text-sm">Quantity</p>
              <section className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setBaseQty((baseQty) => (baseQty === 1 ? 1 : --baseQty))
                  }
                  className="flex h-5 cursor-pointer items-center justify-center border px-2 text-lg font-normal duration-300 hover:bg-gray-700 hover:text-white active:bg-black"
                >
                  -
                </button>

                <span>{baseQty}</span>

                <button
                  onClick={() => setBaseQty((baseQty) => ++baseQty)}
                  className="flex h-5 cursor-pointer items-center justify-center border px-2 text-lg font-normal duration-300 hover:bg-gray-700 hover:text-white active:bg-black"
                >
                  +
                </button>
              </section>
            </section>

            <button
              onClick={() => {
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQty,
                    description: details.description,
                  }),
                );
                toast.success(`${details.title} is added to cart`);
              }}
              className="bg-black px-6 py-3 text-white active:bg-gray-800"
            >
              Add to cart
            </button>
          </section>
          <p className="text-base text-gray-500">
            Category:{" "}
            <span className="font-medium capitalize">{details.category}</span>
          </p>
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

export default Product;

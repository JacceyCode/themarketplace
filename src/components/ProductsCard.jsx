/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa6";

function ProductsCard({ product }) {
  return (
    <section className="group relative">
      <section className="h-96 w-full cursor-pointer overflow-hidden">
        <img
          className="h-full w-full object-cover duration-500 group-hover:scale-110"
          src={product.image}
          alt="product image"
        />
      </section>

      <section className="w-full border px-2 py-4">
        <section className="flex items-center justify-between">
          <h2 className="font-titleFont text-base font-bold">
            {product.title.substring(0, 16)}
          </h2>

          <section className="relative flex w-28 justify-end gap-2 overflow-hidden text-sm">
            <section className="flex transform gap-2 transition-transform duration-500 group-hover:translate-x-24">
              <p className="text-gray-500 line-through">${product.oldPrice}</p>
              <p className="font-semibold">${product.price}</p>
            </section>
            <p className="absolute top-0 z-20 flex w-[100px] -translate-x-32 transform cursor-pointer items-center gap-1 text-gray-500 transition-transform duration-500 hover:text-gray-900 group-hover:translate-x-0">
              Add to cart
              <span>
                <FaArrowRight />
              </span>
            </p>
          </section>
        </section>

        <section>
          <p>{product.category}</p>
        </section>

        <section className="absolute right-0 top-4">
          {product.isNew && (
            <p className="font-titleFont bg-black px-6 py-1 font-semibold text-white">
              Sale
            </p>
          )}
        </section>
      </section>
    </section>
  );
}

export default ProductsCard;

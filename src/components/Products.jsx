import ProductsCard from "./ProductsCard";

function Products() {
  return (
    <section className="py-10">
      <section className="flex flex-col items-center space-y-4">
        <h1 className="w-80 bg-black py-2 text-center text-2xl text-white">
          Everyday Shopping
        </h1>
        <hr className="h-[3px] w-20 bg-black" />
        <p className="max-w-[700px] text-center text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
          reprehenderit, quibusdam autem ex pariatur, ipsam fugit sapiente nemo
          cum facilis veritatis voluptatum repellendus tempore temporibus
          commodi, earum ipsum illum eius.
        </p>
      </section>

      <section className="mx-auto max-w-[1280px]">
        <ProductsCard />
      </section>
    </section>
  );
}

export default Products;
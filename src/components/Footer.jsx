import { FaCcVisa } from "react-icons/fa6";

function Footer() {
  return (
    <section className="font-titleFont bg-black py-20 text-[#949494]">
      <section className="mx-auto max-w-[1280px]">
        <section>
          <span className="text-3xl font-extrabold italic">D-MarketPlace</span>
          <p className="text-base tracking-wide text-white">
            &copy; dmarketplace.com
          </p>
          <section>
            <FaCcVisa />
          </section>
        </section>
      </section>
    </section>
  );
}

export default Footer;

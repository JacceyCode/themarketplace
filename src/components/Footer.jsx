import { IconContext } from "react-icons";
import {
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
  FaGithub,
  FaInstagram,
  FaLocationDot,
  FaMoneyCheckDollar,
  FaSquareFacebook,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BsPaypal, BsPersonFill } from "react-icons/bs";

function Footer() {
  return (
    <section className="font-titleFont bg-black py-20 text-[#949494]">
      <section className="mx-auto grid max-w-[1280px] grid-cols-4">
        {/* ///////////////// LogoIcon Start here /////////////////// */}
        <section className="flex flex-col gap-7">
          <span className="text-3xl font-extrabold italic">D-MarketPlace</span>
          <p className="text-base tracking-wide text-white">
            &copy; dmarketplace.com
          </p>
          <section className="flex space-x-2">
            <IconContext.Provider value={{ size: "36px", color: "gold" }}>
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
              <FaCcStripe />
              <FaMoneyCheckDollar />
            </IconContext.Provider>
          </section>
          <section className="flex space-x-5 text-lg text-gray-400">
            <IconContext.Provider value={{ size: "24px" }}>
              <FaGithub className="cursor-pointer duration-300 hover:text-white" />
              <FaYoutube className="cursor-pointer duration-300 hover:text-white" />
              <FaSquareFacebook className="cursor-pointer duration-300 hover:text-white" />
              <FaXTwitter className="cursor-pointer duration-300 hover:text-white" />
              <FaInstagram className="cursor-pointer duration-300 hover:text-white" />
            </IconContext.Provider>
          </section>
        </section>
        {/* ///////////////// LogoIcon End here /////////////////// */}
        {/* ///////////////// LocateUs Start here /////////////////// */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">Locate Us</h2>
          <section className="flex flex-col gap-2 text-base">
            <p>Lagos, Nigeria.</p>
            <p>Mobile: +234 967 367 7654</p>
            <p>Phone: +234 867 317 7694</p>
            <p>E-mail: dmarketplace@gmail.com</p>
          </section>
        </section>
        {/* ///////////////// LocateUs End here /////////////////// */}
        {/* ///////////////// Profile Start here /////////////////// */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">Profile</h2>
          <section className="flex flex-col gap-2 text-base">
            <p className="flex cursor-pointer items-center gap-3 duration-300 hover:text-white">
              <span>
                <BsPersonFill />
              </span>
              My account
            </p>
            <p className="flex cursor-pointer items-center gap-3 duration-300 hover:text-white">
              <span>
                <BsPaypal />
              </span>
              Checkout
            </p>
            <p className="flex cursor-pointer items-center gap-3 duration-300 hover:text-white">
              <span>
                <FaHome />
              </span>
              Order tracking
            </p>
            <p className="flex cursor-pointer items-center gap-3 duration-300 hover:text-white">
              <span>
                <FaLocationDot />
              </span>
              My account
            </p>
          </section>
        </section>
        {/* ///////////////// Profile End here /////////////////// */}
        {/* ///////////////// Subscribe Start here ////////////////// */}
        <form className="flex flex-col justify-center" action="">
          <input
            className="border bg-transparent px-4 py-2 text-sm"
            placeholder="Enter your email"
            type="email"
            name="email"
            id="email"
            required
          />

          <button
            className="border border-t-0 text-sm text-white hover:bg-gray-900 active:bg-white active:text-black"
            type="submit"
          >
            Subscribe
          </button>
        </form>
        {/* ///////////////// Subscribe End here ////////////////// */}
      </section>
    </section>
  );
}

export default Footer;

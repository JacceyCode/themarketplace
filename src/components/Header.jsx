import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";

function Header() {
  const productData = useSelector((store) => store.market.productData);
  const userInfo = useSelector((store) => store.market.userInfo);

  return (
    <header className="sticky top-0 z-50 h-20 w-full border-b-[1px] border-b-gray-800 bg-white">
      <section className="font-titleFont mx-auto  flex h-full max-w-[1280px] items-center justify-between">
        <Link to="/" className="text-3xl font-extrabold italic text-slate-950">
          D-MarketPlace
        </Link>

        <section className="flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <NavLink className="cursor-pointer text-base font-bold text-black decoration-[1px] underline-offset-2 duration-300 hover:text-orange-900 hover:underline">
              Pages
            </NavLink>
            <NavLink className="cursor-pointer text-base font-bold text-black decoration-[1px] underline-offset-2 duration-300 hover:text-orange-900 hover:underline">
              Shop
            </NavLink>
            <NavLink className="cursor-pointer text-base font-bold text-black decoration-[1px] underline-offset-2 duration-300 hover:text-orange-900 hover:underline">
              Element
            </NavLink>
            <NavLink className="cursor-pointer text-base font-bold text-black decoration-[1px] underline-offset-2 duration-300 hover:text-orange-900 hover:underline">
              Home
            </NavLink>
            <NavLink className="cursor-pointer text-base font-bold text-black decoration-[1px] underline-offset-2 duration-300 hover:text-orange-900 hover:underline">
              Blog
            </NavLink>
          </nav>

          <Link to="/cart" className="relative">
            <IconContext.Provider value={{ size: "36px" }}>
              <AiOutlineShoppingCart />
            </IconContext.Provider>
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
              {productData.length}
            </span>
          </Link>

          <Link to="/login">
            {/* <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white">
              DMP
            </span> */}
            {userInfo ? (
              <section className="flex items-center gap-2">
                <p className="font-titleFont text-base font-semibold underline underline-offset-2">
                  {userInfo.name}
                </p>
                <img
                  className="h-8 w-8 rounded-full"
                  src={userInfo.image}
                  alt="userLogo"
                />
              </section>
            ) : (
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white">
                DMP
              </span>
            )}
          </Link>
        </section>
      </section>
    </header>
  );
}

export default Header;

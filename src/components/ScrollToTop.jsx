import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1100 ? setShowTopBtn(true) : setShowTopBtn(false);
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <FaArrowUpLong
          className="fixed bottom-2 right-2 z-10 mx-auto h-10 w-10 cursor-pointer rounded-lg border-2 border-slate-600 bg-slate-600 p-1 text-white hover:bg-transparent hover:text-slate-600"
          onClick={goToTop}
        />
      )}
    </>
  );
}

export default ScrollToTop;

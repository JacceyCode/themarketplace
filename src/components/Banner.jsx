import { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

function Banner() {
  const [curSlide, setCurSlide] = useState(0);

  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  const prevSlide = () => {
    setCurSlide(curSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurSlide(curSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <section className="h-auto w-full overflow-x-hidden">
      <section className="relative h-[650px] w-screen">
        <span
          style={{ transform: `translateX(-${curSlide * 100}vw)` }}
          className="flex h-full w-[400vw] transition-transform duration-1000"
        >
          <img
            className="h-full w-screen object-cover"
            src={data[0]}
            alt="Banner"
            loading="priority"
          />
          <img
            className="h-full w-screen object-cover"
            src={data[1]}
            alt="Banner"
            loading="priority"
          />
          <img
            className="h-full w-screen object-cover"
            src={data[2]}
            alt="Banner"
            loading="priority"
          />
          <img
            className="h-full w-screen object-cover"
            src={data[3]}
            alt="Banner"
            loading="priority"
          />
        </span>

        <span className="absolute bottom-44 left-0 right-0 mx-auto flex w-fit space-x-8">
          <span
            onClick={prevSlide}
            className="flex h-12 w-14 items-center justify-center border-[1px] border-gray-700 duration-300 hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900"
          >
            <HiArrowLeft />
          </span>

          <span
            onClick={nextSlide}
            className="flex h-12 w-14 items-center justify-center border-[1px] border-gray-700 duration-300 hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900"
          >
            <HiArrowRight />
          </span>
        </span>
      </section>
    </section>
  );
}

export default Banner;

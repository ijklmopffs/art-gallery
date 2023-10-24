import gridOne from "../assets/desktop/image-grid-1.jpg";
import gridTwo from "../assets/desktop/image-grid-2.jpg";
import gridThree from "../assets/desktop/image-grid-3.jpg";
import gridOneTab from "../assets/tablet/image-grid-1.jpg";
import gridTwoTab from "../assets/tablet/image-grid-2.jpg";
import gridThreeTab from "../assets/tablet/image-grid-3.jpg";
import gridOneMobile from "../assets/mobile/image-grid-1.jpg";
import gridTwoMobile from "../assets/mobile/image-grid-2.jpg";
import gridThreeMobile from "../assets/mobile/image-grid-3.jpg";
import hero from "../assets/desktop/image-hero.jpg";
import heroTab from "../assets/tablet/image-hero.jpg";
import heroMobile from "../assets/mobile/image-hero.jpg";
import logoLight from "../assets/logo-light.svg";
import mask from "../assets/Mask.svg";
import right from "../assets/icon-arrow-right.svg";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import twitter from "../assets/icon-twitter.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="flex  flex-col md:flex-row relative">
        <img src={mask} alt="" className="hidden lg:block" />
        <img src={hero} alt="" className="hidden lg:block" />
        <img src={heroTab} alt="" className="hidden md:block lg:hidden" />
        <img src={heroMobile} alt="" className="md:hidden" />
        <h1 className="font-black text-6xl md:text-9xl text-start md:absolute top-40 left-80 p-4 md:p-0">
          <span className="lg:text-white">MODERN</span> <br />
          <span className="lg:text-white">ART GAL</span>
          LERY
        </h1>
        <div className="md:relative right-20 md:top-[28rem] h-fit lg:top-40 p-4 md:p-0">
          <p className="md:w-72 my-10 text-start font-outfit text-lg md:text-xl font-light">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <Link to="/location">
            <div
              className="font-extrabold text-xl uppercase bg-black hover:bg-[#d5966c] 
            text-white flex items-center justify-between w-80 md:w-auto"
            >
              <p className="mx-auto">Our Location</p>
              <div className="bg-[#d5966c] p-4 hover:bg-black">
                <img src={right} alt="" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="max-w-[1110px] mx-auto my-52 p-8">
        <div className="grid md:grid-cols-2 place-items-start gap-8">
          <div className="text-start hidden md:block">
            <h2 className="font-black text-6xl uppercase w-64">
              Your Day at the Gallery
            </h2>
            <p className="font-outfit text-[#444444] font-light w-80 my-10">
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
          </div>
          <img
            src={gridOne}
            alt=""
            className="relative right-24 hidden lg:block"
          />
          <img
            src={gridOneTab}
            alt=""
            className="relative right-24 hidden md:block lg:hidden"
          />
          <img src={gridOneMobile} alt="" className="md:hidden" />
          <div className="text-start md:hidden">
            <h2 className="font-black text-6xl uppercase w-64 ">
              Your Day at the Gallery
            </h2>
            <p className="font-outfit text-[#444444] font-light w-80 my-10">
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
          </div>

          <img src={gridTwo} alt="" className="hidden lg:block" />
          <img src={gridTwoTab} alt="" className="hidden md:block lg:hidden" />
          <img src={gridTwoMobile} alt="" className="md:hidden" />
          <div>
            <img src={gridThree} alt="" className="hidden lg:block" />
            <img
              src={gridThreeTab}
              alt=""
              className="hidden md:block lg:hidden"
            />
            <img src={gridThreeMobile} alt="" className="md:hidden" />
            <div
              className="bg-black text-white text-start p-8 md:p-12 lg:p-8 md:h-[290px] 
            lg:h-[250px] mt-8"
            >
              <h2 className="font-black text-6xl uppercase w-52 lg:w-64">
                Come and be inspired
              </h2>
              <p className="font-outfit text-[#444444] font-light w-72 my-10">
                We’re excited to welcome you to our gallery and see how our
                collections influence you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black">
        <div className="max-w-[1110px] p-10 mx-auto flex flex-col gap-5 md:gap-0 md:flex-row justify-between text-white">
          <img src={logoLight} alt="" className="w-40 md:w-auto" />
          <p className="font-outfit w-96 text-lg text-start">
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
          </p>
          <div className="flex gap-4 items-center">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}

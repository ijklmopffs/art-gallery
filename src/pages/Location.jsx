import map from "../assets/desktop/image-map.png";
import mapTab from "../assets/tablet/image-map.png";
import left from "../assets/icon-arrow-left.svg";
import logoDark from "../assets/logo-dark.svg";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import twitter from "../assets/icon-twitter.svg";

import { Link } from "react-router-dom";

export default function Location() {
  return (
    <>
      <section className="relative">
        <img src={map} alt="" className="hidden lg:block" />
        <img src={mapTab} alt="" className="hidden md:block lg:hidden" />
        <img src={mapTab} alt="" className="md:hidden" />
        <Link to="/">
          <div
            className="font-extrabold absolute top-0 md:left-10 lg:left-80 text-xl uppercase bg-black hover:bg-[#d5966c] 
            text-white flex items-center justify-between w-64"
          >
            <p className="mx-auto">Back to home</p>
            <div className="bg-[#d5966c] p-4 hover:bg-black">
              <img src={left} alt="" />
            </div>
          </div>
        </Link>
      </section>

      <section className="bg-black">
        <div className="max-w-[1110px] p-10 flex flex-col md:flex-row justify-between text-start mx-auto text-white">
          <div>
            <h1 className="font-black text-7xl uppercase w-40">Our location</h1>
          </div>
          <div>
            <h2 className="font-black text-4xl uppercase my-5 text-[#d5966c]">
              99 king street
            </h2>
            <p className="my-5 font-light text-xl font-outfit">
              Newport <br /> RI 02840 <br /> United States of America
            </p>
            <p className="font-outfit text-xl w-96 font-light">
              Our newly opened gallery is located near the Edward King House on
              99 King Street, the Modern Art Gallery is free to all visitors and
              open seven days a week from 8am to 9pm.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#d5966c] ">
        <div
          className="max-w-[1110px] p-10 mx-auto flex flex-col gap-5 md:gap-0 md:flex-row 
        justify-between text-black"
        >
          <img src={logoDark} alt="" className="w-40 md:w-auto" />
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

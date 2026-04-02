import React from "react";
import fl from '../assets/fl.png'
import fr from '../assets/fr.png'
import TesteNest2 from '../assets/TesteNest2.png'
import footerbg from '../assets/footerbg.png'
const Footer = () => {
  return (
    <>
      <footer className="relative bg-[#f5f5f5]  pt-24 pb-12 overflow-hidden">
        {/* BACKGROUND DECORATION */}
        <img
          src={footerbg}
          alt="footer bg"
          className="absolute bottom-0 left-0 w-full opacity-80 pointer-events-none select-none z-0"
        />
        {/* CONTENT ABOVE BACKGROUND */}
        <div className="relative z-10 max-w-[70rem] mx-20 md:px-4 lg:px-[10%]">

          {/* TOP SECTION */}
          <div className="grid md:grid-cols-4 md:gap-8 gap-6 justify-items-center md:justify-items-center">

            {/* RED CARD */}
            <div className="bg-red-500 text-white rounded-2xl p-3 md:w-48 shadow-md w-full max-w-[300px] h-[220px] flex flex-col justify-between items-start">

              {/* TOP */}
              <div className="w-full">

                {/* LOGO (TOP LEFT) */}
                <img
                  src={TesteNest2}
                  alt="TasteNest"
                  className="h-12 mb-1"
                />

                {/* TEXT (LEFT ALIGNED) */}
                <p className="text-[10px] leading-5 md:text-[8px] text-left">
                  Tuesday – Saturday
                  12:00pm – 23:00pm <br />
                  Closed on Sunday
                </p>
              </div>

              {/* BOTTOM */}
              <div className="w-full">
                <div className="text-yellow-300 text-sm"></div>
                <p className="text-xs mt-1">5 star rated on TripAdvisor</p>
              </div>

            </div>

            {/* ABOUT */}
            <div className="text-center md:text-left">
              <h4 className="font-black text-black mb-3 border-b-4 border-[#FFC224] inline-block pb-1">
                About
              </h4>
              <ul className="space-y-3 text-sm text-black mt-4">
                {["Foodio One", "Special Dish", "Reservation", "Contact"].map((item) => (
                  <li key={item} className="hover:text-black cursor-pointer">
                   › {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* MENU */}
            <div className="text-center md:text-left">
              <h4 className="font-black text-black mb-3 border-b-4 border-[#FFC224] inline-block pb-1">
                Menu
              </h4>
              <ul className="space-y-3 text-sm text-black mt-4">
                {["Steaks", "Burgers", "Cocktails", "Bar B Q", "Desserts"].map((item) => (
                  <li key={item} className="hover:text-black cursor-pointer">
                    › {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* NEWSLETTER */}
            <div className="text-center  md:text-left w-full max-w-[260px]">
              <h4 className="font-black text-black mb-3 border-b-4 border-[#FFC224] inline-block pb-1">
                Newsletter
              </h4>

              <p className="text-sm text-black mb-4 mt-4">
                Get recent news and updates.
              </p>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full md:w-52 bg-white border border-gray-200 rounded px-4 py-2 text-sm mb-3 outline-none"
              />
              <div className="border-[2px] translate-x-14 md:translate-x-3 lg:translate-x-2 border-red-500 rounded-lg w-[50%] md:w-[80%] lg:w-[85%] pt-[2px] pb-[2px] ">
                <button className="bg-red-500 text-white px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 w-[100%] lg:w-[7.8rem] -translate-x-[6px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* ✅ VISIBLE DIVIDER */}
          <div className="relative md:flex justify-center z-10 mt-16 mb-10">
            <div className="h-[4px] w-full md:w-[35rem] lg:w-[70rem] bg-[#FFC224] rounded"></div>
          </div>

          {/* BOTTOM BAR */}
          <div className="flex flex-col md:flex-row justify-between md:justify-around items-center text-[9px] text-xs text-gray-500 gap-4">
            <p>
              © 2026{" "}
              <span className="text-red-500 font-semibold">TasteNest</span> | All showewhite Themes
            </p>

            <div className="flex gap-6 text-black font-bold">
              {["Facebook", "Insta"].map((s) => (
                <span key={s} className="cursor-pointer hover:text-black">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

       
      </footer>
    </>
  );
};

export default Footer;
import TesteNest from './assets/TesteNest.png'
import Container from './assets/Container.png'
import burger from './assets/burger.png'
import experince from './assets/experince.png'
import { Menu, X, ChevronDown } from "lucide-react";
import food1 from './assets/food1.png'
import food2 from './assets/food2.png'
import food3 from './assets/food3.png'
import food4 from './assets/food4.png'
import section3 from './assets/section3.png'
import s3img from './assets/s3img.png'
import s3icon from './assets/s3icon.png'
import m1 from './assets/m1.png'
import m2 from './assets/m2.png'
import m3 from './assets/m3.png'
import m4 from './assets/m4.png'
import m5 from './assets/m5.png'
import curry from './assets/curry.png'
import B1 from './assets/B1.png'
import B2 from './assets/B2.png'
import B3 from './assets/B3.png'
import B4 from './assets/B4.png'
import Detail from './component/detail.jsx'
import Experiences from './component/experiences.jsx'
import FoodCard from './component/Foodcard.jsx'
import burger2 from './assets/burger2.png'
import isymbol from './assets/isymbol.png'
import bg1 from './assets/bg1.png'
import bg2 from './assets/bg2.png'
import bg3 from './assets/bg3.png'
import bg4 from './assets/bg4.png'
import bg5 from './assets/bg5.png'
import ctr from './assets/ctr.png'
import Footer from './component/footer.jsx'
import './App.css'
import svg1 from './assets/svg1.png'
import svg2 from './assets/svg2.png'
import { useState, useEffect } from "react";
import dcnt from './assets/dcnt.png'


const FOOD = [food1, food2, food3, food4];

const INSTA = [
  bg1, bg2, bg3, bg4, bg5
];
const fooditems = [
  { title: "Crispy Fried Chicken", price: 11.74, oldPrice: 12.99, image: m1 },
  { title: "BBQ Chicken Pizza Now", price: 13.74, oldPrice: 15.99, image: m2 },
  { title: "Zinger Double Burger", price: 15.74, oldPrice: 17.99, image: m3 },
  { title: "Shroom Sauce Burger", price: 25.74, oldPrice: 29.99, image: m4 },
];
/* ─── Data ──────────────────────────────────────────────── */
const MENU_ITEMS = [
  { name: "Shroom Sauce Burger", price: "$11.74", img: m1 },
  { name: "Delicious Black Coffee", price: "$11.74", img: m2 },
  { name: "BBQ Chicken Pizza Now", price: "$13.17", img: m3 },
  { name: "Crispy Fried Chicken", price: "$15.19", img: m4 },
  { name: "Zinger Double Burger", price: "$23.93", img: m5 },
  { name: "Margherita Pizza Now", price: "$16.80", img: m2 },
  { name: "Crispy Fried Chicken", price: "$10.83", img: m3 },
  { name: "Black Pepper Burger", price: "$15.88", img: m1 },
];

const CATEGORIES = [
  { name: "Organic Food", detail: "12 pices left", img: food1 },
  { name: "Zinger Burgers", detail: "13 pices left", img: food2 },
  { name: "Grill Food", detail: "14 pices left", img: food3 },
  { name: "Bar B Q", detail: "15 pices left", img: food4 },
  { name: "Organic Food1", detail: "16 pices left", img: food1 },
  { name: "Zinger Burgers2", detail: "17 pices left", img: food2 },
  { name: "Grill Food5", detail: "18 pices left", img: food3 },
  { name: "Bar B Q4", detail: "19 pices left", img: food4 },
];

const SERVICES = [
  { img: B1, title: "Afternoon Tea", desc: "Enjoy our premium afternoon tea selection" },
  { img: B2, title: "Wine & Cocktails", desc: "Handcrafted cocktails and fine wines" },
  { img: B3, title: "Takeaway & Delivery", desc: "Fast delivery right to your door" },
  { img: B4, title: "Alfresco Dining", desc: "Dine outdoors in our beautiful garden" },
];

/* ─── Sub-components ────────────────────────────────────── */
function StarRating({ n = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < n ? "#f5c518" : "#ccc", fontSize: 13 }}>★</span>
      ))}
    </div>
  );
}

function MenuCard({ item }) {
  return (
    <div className="min-h-32 sm:min-h-40 bg-white rounded-2xl shadow-md 
p-4 sm:p-6 md:p-4 flex flex-row sm:flex-row items-center gap-3 md:gap-9
hover:shadow-xl transition-shadow duration-300 relative group">

  {/* Image Container */}
  <div className="bg-red-600 w-6 h-12 sm:w-14 sm:h-14 md:w-14 md:h-36 
  rounded-t-full rounded-b-full  flex items-center justify-center overflow-visible">
    
    <img 
      src={item.img} 
      alt={item.name} 
      className="z-10 scale-[200%] sm:scale-150 md:scale-[250%] transition-transform duration-300" 
    />
  </div>

  {/* Content */}
  <div className="flex flex-col justify-center flex-1">
    <p className="font-bold text-gray-800 text-xs sm:text-sm leading-tight">
      {item.name}
    </p>
    <span className="text-red-500 font-extrabold text-sm sm:text-base">
      {item.price}
    </span>
  </div>

  {/* Button */}
  <button className="h-7 w-7 sm:w-8 sm:h-8 rounded-lg bg-yellow-400 text-white 
  flex items-center justify-center text-sm sm:text-base font-bold relative top-12 md:top-16
  hover:bg-red-600 transition">
    🔒
  </button>

</div>
  );
}

/* ─── Main App ──────────────────────────────────────────── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dealActive, setDealActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false)

  const deals = [
    "Fat Appetizer", "Buffet Vegas", "Pasta Dishes", "Tasty Snacks", "Cocktail Drinks"
  ];

  const menu = [
    "Fish Vegetables",
    "Buffet Vegas",
    "Fish Fry Grilled",
    "Tasty Snacks",
    "Smoked Chicken",
  ]

  const [current, setCurrent] = useState(0);

  const slides = [1, 2]; // just duplicating

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000); // 3 sec

    return () => clearInterval(interval);
  }, []);

  const chunkedCategories = [];
  for (let i = 0; i < CATEGORIES.length; i += 4) {
    chunkedCategories.push(CATEGORIES.slice(i, i + 4));
  }


  const getTranslate = () => {
    if (window.innerWidth < 768) return 110;
    return 100;
  };


  return (
    <div style={{ overflowX: "hidden" }}>


      {/* ══════════════════════ NAVBAR ══════════════════════ */}
      <nav className="max-w-7xl z-50 overflow-y-visible rounded-xl shadow-2xl py-3 ">

        {/* Top Bar */}
        <div className="flex items-center px-12 md:mx-20 justify-between">

          {/* Logo */}
          <img src={TesteNest} alt="logo" className="w-20 h-auto" />

          {/* Desktop Menu */}
          <div className=''>
          <ul className="hidden md:visible md:flex items-center gap-6 text-black md:text-[13px] font-medium">

            {/* Home Dropdown */}
            <li
              className="relative cursor-pointer "
              onMouseEnter={() => setDropdown("home")}
              onMouseLeave={() => setDropdown(null)}
            >
              <div className="flex items-center gap-1">
                Home <ChevronDown size={16} />
              </div>

              {dropdown === "home" && (
                <ul className="absolute z-20 top-8 left-0 bg-white shadow-lg rounded-xl w-40 ">
                  <li className="px-4 py-2 hover:bg-gray-100">Home 1</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Home 2</li>
                </ul>
              )}
            </li>

            <li className="cursor-pointer">About Us</li>

            {/* Shop Dropdown */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setDropdown("shop")}
              onMouseLeave={() => setDropdown(null)}
            >
              <div className="flex items-center gap-1">
                Shop <ChevronDown size={16} />
              </div>

              {dropdown === "shop" && (
                <ul className="absolute top-8 left-0 z-20 bg-white shadow-lg rounded-xl w-40 py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">Products</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Cart</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Checkout</li>
                </ul>
              )}
            </li>

            <li className="cursor-pointer">Blog </li>
            <li className="cursor-pointer">Pages </li>
            <li className="cursor-pointer">Contact</li>
          </ul>
</div>
          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <img src={Container} alt="" className="w-5 h-5" />
            <button className="bg-yellow-300 rounded-md font-bold text-white px-6 py-2 md:py-1">
              Contact Us
            </button>

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 space-y-4 space-x-4 text-gray-700 font-medium">

            {/* Home */}
            <div>
              <div
                className="flex justify-start gap-3 pl-4 items-center cursor-pointer"
                onClick={() => toggleDropdown("home")}
              >
                Home <ChevronDown size={16} />
              </div>

              {dropdown === "home" && (
                <div className="ml-4 mt-2 space-y-2 text-sm">
                  <p>Home 1</p>
                  <p>Home 2</p>
                </div>
              )}
            </div>

            <p>About Us</p>

            {/* Shop */}
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown("shop")}
              >
                Shop <ChevronDown size={16} />
              </div>

              {dropdown === "shop" && (
                <div className="ml-4 mt-2 space-y-2 text-sm">
                  <p>Products</p>
                  <p>Cart</p>
                  <p>Checkout</p>
                </div>
              )}
            </div>

            <p>Blog</p>
            <p>Pages</p>
            <p>Contact</p>

            {/* Mobile Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <img src={Container} alt="" className="w-5 h-5" />
              <button className="bg-yellow-300 rounded-xl px-6 py-2">
                Contact Us
              </button>


            </div>
          </div>
        )}
      </nav>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <div className="relative overflow-hidden">

        {/* SLIDER TRACK */}
        <div
          className="flex transition-transform duration-700 ease-in-out w-full"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >

          {slides.map((_, index) => (
            <div key={index} className="w-full flex-shrink-0">

              <div className=" bg-[url('./bgimg.png')] sm:pt-12 flex items-center sm:justify-center pl-5 sm:pl-0 bg-cover bg-center min-h-screen ">
                {/* SECTION */}
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:justify-around w-full px-4 py-10 gap-9 ">

                  {/* LEFT */}
                  <div className='text-nowrap  '>
                    <Detail />
                  </div>

                  {/* RIGHT */}
                  <div className="w-full  flex justify-center top-10 sm:top-0 relative">

                    {/* SMALL DECOR IMAGE */}
                    <img
                      src={dcnt}
                      alt="no image"
                      className=" sm:block h-20 absolute z-10 bottom-0 left-7 md:left-0"
                    />

                    {/* MAIN IMAGE */}
                    <img
                      src={burger}
                      alt="burger"
                      className="w-[240px] sm:w-[350px] md:scale-[120%] md:w-[450px] lg:w-[550px]"
                    />

                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* DOTS */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${current === i ? "bg-red-500" : "bg-gray-300"}`}
            />
          ))}
        </div>

        {/* ARROWS */}
        <button
          onClick={() =>
            setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1))
          }
          className="hidden sm:block absolute left-6 bottom-6 border-2 border-white rounded-full text-white text-2xl px-3 py-1"
        >
          ←
        </button>

        <button
          onClick={() =>
            setCurrent(prev => (prev + 1) % slides.length)
          }
          className="hidden sm:block absolute right-6 bottom-6 border-2 border-white rounded-full text-white text-2xl px-3 py-1"
        >
          →
        </button>

      </div>

      {/* ══════════════════════ ABOUT / EXPERIENCE ══════════════════════ */}
      < section className="py-16 px-16 md:px-[20%] max-w-6xl mx-auto flex-col items-center text-center" >
        <p className="red-tag text-center flex items-center">ABOUT THE RESTAURANT</p>
        <h2 className=" text-center text-3xl font-extrabold text-gray-800 mb-10">
          Perfect Place For An Exceptional Experience
        </h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="">

            <img src={experince} className=" object-cover h-auto w-full" alt="r2" />
          </div>

          <div className="col-span-1 flex flex-col gap-5">
            <p className='text-[10px]'>&Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nesciunt molestiae neque. Quibusdam ea repellat repudiandae. Blanditiis impedit adipisci dolore libero nostrum delectus earum! Labore, sapiente. Sint facere cumque quam.</p>
            {[
              { img: svg1, title: "Online Food Ordering", desc: "Order your favourite meals with just a few taps." },
              { img: svg2, title: "100% Healthy Food", desc: "Fresh, nutritious ingredients in every single dish." },
            ].map(({ img, title, desc }) => (
              <div key={title} className="flex gap-4 items-start">
                <div className='border-yellow-300 border-[2px]' style={{ borderRadius: "50%", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{<img src={img} alt={title} className='w-6' />
                }</div>
                <div>
                  <h4 className="font-extrabold text-gray-800">{title}</h4>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* ══════════════════════ CATEGORIES ══════════════════════ */}

      <section className="py-12 sm:py-14 px-4 sm:px-6 md:px-16 overflow-hidden">

        <h2 className="section-title text-center text-2xl sm:text-3xl font-extrabold text-gray-800 mb-8 sm:mb-10">
          Choose a Category
        </h2>

        {/* SLIDER TRACK */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${current * getTranslate()}%)`,
          }}
        >

          {chunkedCategories.map((group, index) => (
            <div key={index} className="w-full sm:w-full flex-shrink-0 flex justify-between sm:justify-center mx-3 sm:mx-0 sm:gap-8 md:gap-10">

              {group.map(({ detail, name, img }) => (
                <div
                  key={name}
                  className="flex flex-col items-center  sm:gap-3 cursor-pointer group w-[80px] sm:w-[100px] md:w-[120px]"
                >

                  {/* IMAGE */}
                  <div className="
              w-[80px] h-[48px]
              sm:w-[150px] sm:h-[90px]
              md:w-[150px] md:h-[90px]
              rounded-[2.1rem] overflow-hidden
              shadow-md
              transition-all duration-300
              
            ">
                    <img
                      src={img}
                      alt={name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* TEXT */}
                  <span className="font-semibold sm:font-bold text-gray-700 text-[11px] sm:text-sm md:text-base text-center group-hover:text-red-500">
                    {name}
                  </span>

                  <span className="text-red-700 text-[11px] sm:text-sm md:text-base text-center group-hover:text-yellow-200">
                    {detail}
                  </span>

                </div>
              ))}

            </div>
          ))}

        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-6 gap-2">
          {chunkedCategories.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${current === i ? "bg-red-500" : "bg-gray-300"}`}
            />
          ))}
        </div>

      </section>
      {/* ══════════════════════ HOW WE WORK ══════════════════════ */}
     

      <section
        style={{
          background: `url(${section3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full py-10 px-4 sm:px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 sm:gap-10 items-center text-center md:text-left">

          {/* LEFT CONTENT */}
          <div className="flex flex-col pl-8 sm:items-center md:items-start">

            {/* TEXT */}
            <p className="
    order-2 md:order-1
  mt-4 md:mt-0
  text-white font-extrabold text-sm sm:text-base

  text-left md:text-center right-10
  relative md:-right-[100%]
  h-9 flex items-end sm:items-start
  ">
              Watch and follow
            </p>

            {/* SUBTEXT */}
            <p
              className="order-1 md:order-2 mt-2 text-[10px] sm:text-xs tracking-[3px] font-extrabold uppercase"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              FAST ORDER IN 3 STEPS
            </p>

            {/* HEADING */}
            <h2
              className="order-1 md:order-2 bangers text-white mt-2 leading-tight text-center md:text-left"
              style={{ fontSize: "clamp(1.8rem,6vw,4rem)" }}
            >
              How We Work
            </h2>

            {/* ICON */}
            <div className="order-1 md:order-2 flex justify-center md:justify-start mt-6">
              <img
                src={s3icon}
                alt="steps"
                className="w-[80%] sm:w-[60%] md:w-[70%]"
              />
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center ">

            <div className='relative top-0 sm:top-11'>
              <img src={ctr} alt="no image" />
            </div>
            <img
              src={s3img}
              alt="chef"
              className="
          
          h-[260px] sm:h-[300px] md:h-[340px]
          object-cover shadow-2xl
          rounded-full
        "

            />
          </div>

        </div>
      </section>

      {/* ══════════════════════ FAST FOOD MENUS ══════════════════════ */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-16 max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-800 mb-8 sm:mb-10">
          Fast Food Menus
        </h2>

        {/* GRID → ALWAYS 2 COL ON MOBILE */}
        <div className="
        min-h-40
    grid 
    grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-3 
    gap-4 sm:gap-5 md:gap-6
    
  ">
          {MENU_ITEMS.map(item => (
            <div key={item.name + item.price} className="">
              <MenuCard item={item} />
            </div>
          ))}


          {/* OPENING TIMES */}
          <div className=" h-40 flex relative md:left-0 left-[50%] justify-center px-2">
            <div className="opening-badge w-full max-w-[280px] sm:max-w-xs">

              <p className="font-extrabold text-gray-800 uppercase tracking-widest text-[10px] sm:text-xs mb-2 text-center">
                Opening Times
              </p>

              <div className="text-xs sm:text-sm text-gray-700 space-y-1">
                {[["Mon–Fri", "08:00 – 22:00"], ["Sat–Sun", "09:00 – 23:00"]].map(([d, t]) => (
                  <div key={d} className="flex justify-between font-semibold">
                    <span>{d}</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              <button className="bg-red-600 -translate-y-3 text-white font-extrabold text-nowrap w-32 md:h-16 md:px-6 mt-10 md:w-64 -translate-x-2 rounded-3xl text-sm sm:text-base">
                +1 (234) 567 890
                <h4 className='font-mono font-semibold text-[10px]'>Avenue newtown 124 united state</h4>
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ SERVICES ══════════════════════ */}
      < section className="py-5 px-8 md:px-36  " >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="red-tag">FOOD SERVICES</p>
            <h2 className="bangers text-gray-800 mt-1" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>We Provide Best<br />Services</h2>
            <div className="grid grid-cols-2 gap-5 mt-6">
              {SERVICES.map(({ img, title, desc }) => (
                <div key={title} className="flex gap-3 items-start">
                  <div style={{ borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                    <img src={img} alt={title} className="w-16 h-16" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-800 text-sm">{title}</h4>
                    <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src={curry} alt="dish" style={{ objectFit: "cover", }} className='w-[60%]' />
          </div>
        </div>
      </section >

      {/* ══════════════════════ UNIQUE EXPERIENCES ══════════════════════ */}
      < section className="py-10 px-  md:px-16 max-w-6xl mx-auto text-center flex-col" >
        <p className="red-tag text-center block">PACKAGES</p>
        <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-10">A Collection of Unique </h2>
        <h2 className=" text-center text-3xl font-extrabold text-gray-800 mb-10"> Experiences</h2>
        <div className="flex items-center relative right-4 sm:right-14">
          <Experiences />

        </div>
      </section >

      {/* ══════════════════════ COCKTAIL / DRINKS ══════════════════════ */}
      <section className=" bg-gray-50 py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">

          {/* Tag */}
          <p className="red-tag text-xs sm:text-sm">
            FOOD MENU
          </p>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800 mb-2 leading-snug">
            A Complimentary Cocktail, Coffee,
          </h2>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800 mb-8 sm:mb-10 leading-snug">
            Ice-Tea For You.
          </h2>
          <span className='text-[15px] text-gray-500'>Enjoy a non alcoholic espresso martin</span>

          {/* GRID */}
          <div className="
      grid 
      grid-cols-2 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      gap-5 sm:gap-5 
      mb-8
    ">
            {fooditems.map((item, index) => (
              <FoodCard key={index} item={item} />
            ))}
          </div>

          {/* Footer Text */}
          <p className="text-gray-500 text-xs sm:text-sm">
            Booking Calling 24/7:{" "}
            <span className="text-red-500 font-extrabold">
              +1 (800) 321-000
            </span>
            
          </p>

        </div>
      </section>

      {/* ══════════════════════ BEST SELLER DEALS ══════════════════════ */}
      <div className="min-h-full px-4  sm:px-6 md:px-16 py-3 text-white">

        {/* Heading */}
        <h2 className="text-red-500 sm:translate-x-[11%] font-bold tracking-widest mb-3 text-sm sm:text-base text-center md:text-left">
          WEEKLY SPECIAL
        </h2>

        <h2 className="font-extrabold sm:translate-x-[11%] text-2xl sm:text-3xl md:text-4xl text-black tracking-widest mb-10 text-center md:text-left">
          Best Seller Deals
        </h2>

        {/* Main Layout */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10">

          {/* LEFT PANEL */}
          <div className="bg-red-500 w-full  max-w-[320px] md:w-[90%] sm:h-64 p-3  rounded-lg space-y-1 z-10">
            {menu.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-2  px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-[10px] 
          ${index === 1
                    ? "bg-yellow-400 text-black"
                    : "bg-white text-black"
                  }`}
              >
                <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-400"></span>
                {item}
              </div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="
      relative left-[20%]
      md:absolute md:left-1/2 md:-translate-x-1/3 
      z-20
    ">
            <img
              src={burger2}
              alt="burger"
              className="
       w-[55%]
         
        "
            />
          </div>

          {/* RIGHT PANEL */}
          <div className="border-[3px] flex-col text-center text-nowrap border-yellow-400 rounded-[30px] sm:rounded-lg p-2  w-full h-64  md:w-[350px] md:px-[10%] z-10">

            {/* Features */}
            <span className='text-black font-extrabold text-[20px]'>Buffet Vegas</span>
            <div className="grid grid-cols-1 md:text-[7px] font-bold sm:grid-cols-2 text-start gap-3 text-black  sm:text-base">
              <p>✔ Fresh & Tasty</p>
              <p>✔ Best in organic foods</p>
              <p>✔ 100 Fresh ingredients</p>
              <p>✔ Better for your Health</p>
            </div>

            {/* Price */}
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <span className='text-red-500 text-2xl w-1 font-extrabold'>$</span>
              <span className="text-black text-2xl font-bold">10.85</span>
              <span className="text-black line-through text-sm sm:text-lg">
                $14.85
              </span>
            </div>

            {/* Button */}
            <div className=" border-[2px] relative bottom-5 left-[30%] sm:left-0 sm:bottom-0 border-red-500 w-[35%] sm:w-[65%] rounded-lg pt-[2px] pb-[2px] justify-start md:justify-start">
              <button className="bg-red-500 -translate-x-3 px-8  sm:py-2 sm:px-6  rounded-lg text-white font-semibold shadow-lg border-2 border-red-600 hover:scale-105 transition">
                Product
              </button>
            </div>

          </div>

        </div>
      </div>
      {/* ══════════════════════ INSTAGRAM ══════════════════════ */}
      < section className="py-14 px-6 text-center " >
        <div style={{ width: 48, height: 48, background: "var(--red)", borderRadius: "50%", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
          <img src={isymbol} alt="no logo" className='  w-6' />
        </div>
        <h2 className=" text-3xl font-extrabold text-gray-800 mb-8">Follow BravisThemes</h2> 
        <div className='text-[15px] text-gray-400 mb-8 '>Join our community to inspire your desires</div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 max-w-4xl mx-auto">
          {INSTA.map((src, i) => (
            <div key={i} className="insta-img relative overflow-hidden  aspect-square cursor-pointer">
              <img src={src} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="insta" />
              <div className="insta-overlay absolute inset-0 flex items-center justify-center" style={{ background: "rgba(232,25,60,0.6)" }}>
                <span className="text-white text-2xl">♥</span>
              </div>
            </div>
          ))}
        </div>
      </section >

      {/* ══════════════════════ FOOTER ══════════════════════ */}
      <Footer />
    </div >
  );
}
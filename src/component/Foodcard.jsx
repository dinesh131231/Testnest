import React from "react";

const FoodCard = ({ item }) => {
  return (
    <div className="relative min-w-44 mt-24 bg-gray-100 rounded-3xl shadow-lg pt-20  pb-6 px-5 text-center">

      {/* Floating Image */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">

        {/* Red Ellipse Background */}
        <div className="w-40 h-20 relative top-9 bg-red-500  rounded-l-full rounded-r-full"></div>

        {/* Overlapping Image */}
        <img
          src={item.image}
          alt={item.title}
          className="w-56 h-56 object-contain absolute -top-8   left-1/2 transform -translate-x-1/2 z-10"
        />

      </div>

      {/* Content */}
      <div className="text-start">
      <p className="text-gray-500 text-sm mb-1">100 grams</p>

      <h2 className="text-lg font-bold text-gray-900 leading-snug">
        {item.title}
      </h2>

      {/* Price */}
      <div className="mt-3 text-[9px] md:text-[15px]">
        {item.oldPrice && (
          <span className="text-gray-400 line-through mr-2">
            ${item.oldPrice}
          </span>
        )}
        <span className="text-red-500 text-xl font-bold">
          ${item.price}
        </span>
      </div>
</div>
      {/* Button */}
      <button className="absolute bottom-4 right-4 bg-yellow-400 p-1 rounded-xl shadow-md hover:scale-105 transition">
        🔒
      </button>
    </div>
  );
};

export default FoodCard;
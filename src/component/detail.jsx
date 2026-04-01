import React from 'react'

function Detail() {
  return (
    <div className="w-[50%] object-contain sm:flex sm:gap-14 p-0 sm:px-6">

      {/* SLIDE 1 */}
      <div
        style={{
          background: "transparent",

          borderRadius: 12
        }}
        className="sm:px-[40px]"
      >

        <p
          style={{
            color: "#e8193c",
            fontFamily: "'Nunito',sans-serif",
            fontWeight: 800,
            fontSize: 15,
            letterSpacing: 2,
            margin: "0 0 8px"
          }}
          className="text-xs sm:text-sm"
        >
          Fastest Delivery & Easy Pickup
        </p>

        <h1
          style={{
            fontFamily: "'Bangers',cursive",
            fontSize: "clamp(2.5rem,10vw,80px)", // ✅ responsive font
            color: "#f5c518",
            margin: "0 0 18px",
            lineHeight: 1,
            letterSpacing: 2
          }}
        >
          Kings Burger
        </h1>

        <p
          style={{
            color: "#fff",
            fontFamily: "'Nunito',sans-serif",
            fontSize: 16,
            lineHeight: 1.7,

            maxWidth: 420
          }}
          className="text-sm text-wrap sm:text-nowrap sm:text-base"
        >
          Good food starts with good ingredients. We only<br />bring you the best.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-7">

          {/* BUTTON */}
          <div className="border-[3px] border-[#e8193c] w-[90%] sm:w-[50%] rounded-xl pt-1 pb-1">
            <button
              className="w-[10rem] sm:w-[13.3rem] -translate-x-4"
              style={{
                background: "#e8193c",
                color: "#fff",
                fontFamily: "'Nunito',sans-serif",
                fontWeight: 800,
                fontSize: 16,
                padding: "12px 20px",
                borderRadius: 10,
                border: "none",
                cursor: "pointer",
                
              }}
             
            >
              View Our Menu
            </button>
          </div>

          {/* RATING */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <span key={i} style={{ color: "#f5c518", fontSize: 18 }}>★</span>
              ))}
            </div>
            <span
              style={{
                color: "#fff",
                fontFamily: "'Nunito',sans-serif",
                fontWeight: 700,
                fontSize: 18
              }}
            >
              4.8
            </span>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Detail
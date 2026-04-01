import React from 'react'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'

function Experiences() {
    return (

        <div className="flex flex-col md:flex-row items-center justify-around gap-16 w-full px-4">

            {/* CARD 1 */}
            <div className="relative flex items-center justify-center">

                {/* Circle */}
                <div className="w-[240px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] 
     rounded-full border-4 border-yellow-400 
    flex flex-col justify-start pl-6 pt-7 sm:pl-8 z-10">

                    <h2 className="font-bold w-28 text-wrap sm:w-40 sm:mt-6 sm:text-lg md:text-xl md:mb-3">
                        Valentine's Day Private Table
                    </h2>

                    <ul className="space-y-1 sm:space-y-2 text-gray-700 text-[10px] sm:text-sm">
                        {["Candle Light Dinner", "Red Wine", "Romantic Music", "Quality Food"].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image (OVERLAP RESPONSIVE) */}
                <img
                    src={c2}
                    alt="food"
                    className="
        absolute 
        left-[55%] sm:left-[60%] md:left-[65%]
        top-1/2 -translate-y-1/2
        w-[140px] sm:w-[200px] md:w-[260px]
        h-[200px] sm:h-[280px] md:h-[360px]
        object-cover rounded-3xl shadow-2xl z-20
      "
                />
            </div>

            {/* CARD 2 */}
            <div className="relative flex items-center justify-center">

                {/* Circle */}
                <div className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] 
     rounded-full border-4 border-yellow-400 
    flex flex-col justify-start pl-6 pt-7 sm:pl-8 z-10">

                    <h2 className="font-bold text-wrap sm:w-40 w-24 sm:mt-6 sm:text-lg md:text-xl md:mb-3">
                        Birthday party Event special
                    </h2>

                    <ul className="space-y-1 sm:space-y-2 text-gray-700 text-[10px] sm:text-sm">
                        {["Baloon decorate", "Cake pestries", "Soft drink", "Dinner and cocolet"].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image */}
                <img
                    src={c1}
                    alt="food"
                    className="
        absolute 
        left-[55%] sm:left-[60%] md:left-[65%]
        top-1/2 -translate-y-1/2
        w-[140px] sm:w-[200px] md:w-[260px]
        h-[200px] sm:h-[280px] md:h-[360px]
        object-cover rounded-3xl shadow-2xl z-20
      "
                />
            </div>

        </div>
    )
}

export default Experiences
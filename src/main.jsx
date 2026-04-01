import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Navbar from './component/Navbar.jsx'
// import Detail from './component/detail.jsx'
// import Experiences from './component/experiences.jsx'
// import FoodCard from './component/Foodcard.jsx'
// import Footer from './component/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Navbar /> */}
    {/* <Detail /> */}
    {/* <Experiences /> */}
    {/* <Footer /> */}
    {/* <FoodCard item={{ title: "Delicious Burger", price: 9.99, oldPrice: 14.99, image: "https://via.placeholder.com/150" }} /> */}
  </StrictMode>,
)

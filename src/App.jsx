import './App.css'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Banner from './Component/Herosection/Banner'
import PremiumTools from './Component/Herosection/PremiumTools'
import SmallHero from './Component/Herosection/SmallHero'
import Navbar from './Component/navbar/Navbar'
import Footer from './Component/Footer/Footer'
import ModelLode from './Component/AllModelCard/ModelLode'
import Cart from './Component/Cart/Cart'
import StartedStep from './Component/ StartedStep/ StartedStep'
import PriceCard from './Component/PriceCard/PriceCard'
import Workflow from './Component/Workflow/Workflow'


// fetch data
const promisedata = async () => {
  const response = await fetch('/modeldata.json')
  return response.json()
}

const dataPromise = promisedata()


function App() {

  const [cards, setCard] = useState([])
  const [activeTab, setActiveTab] = useState("Products")

  return (
    <>
      <Navbar cards={cards} />

      <Banner />
      <SmallHero />
      <PremiumTools />

      {/* Tabs */}
      <div className="flex justify-center">
        <div className="flex justify-center mb-9 bg-gray-100 rounded-full w-max p-1">
          {/* Products Button */}
          <input
            onClick={() => setActiveTab("Products")}
            type="radio"
            name="tabs"
            className={`tab cursor-pointer w-40 sm:w-44 py-2 sm:py-3 text-center font-semibold transition-all duration-300 ease-in-out
              border-2 border-gray-300
              rounded-full
              ${activeTab === "Products"
                ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-md border-indigo-600"
                : "text-gray-900 bg-white hover:bg-gradient-to-r hover:from-indigo-600 hover:via-violet-600 hover:to-purple-600 hover:text-white shadow-sm"
              }`}
            aria-label="Products"
            defaultChecked
          />

          {/* Cart Button */}
          <input
            onClick={() => setActiveTab("Cart")}
            type="radio"
            name="tabs"
            className={`tab cursor-pointer w-40 sm:w-44 py-2 sm:py-3 text-center font-semibold transition-all duration-300 ease-in-out
              border-2 border-gray-300
              rounded-full
              ${activeTab === "Cart"
                ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-md border-indigo-600"
                : "text-gray-900 bg-white hover:bg-gradient-to-r hover:from-indigo-600 hover:via-violet-600 hover:to-purple-600 hover:text-white shadow-sm"
              }`}
            aria-label={`Cart (${cards.length})`}
          />
        </div>
      </div>


      {/* Conditional render */}
      {

        activeTab === "Products"

          ?

          <ModelLode
            dataPromise={dataPromise}
            cards={cards}
            setCard={setCard}
          />

          :

          <Cart
            cards={cards}
            setCard={setCard}
          />

      }


      <StartedStep> </StartedStep>
      <PriceCard> </PriceCard>
      <Workflow></Workflow>


      <Footer />

    </>
  )
}

export default App
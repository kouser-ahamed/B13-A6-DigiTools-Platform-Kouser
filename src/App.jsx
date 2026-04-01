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
      <div className="tabs tabs-box bg-transparent font-bold justify-center mb-9">

        <input
          onClick={() => setActiveTab("Products")}
          type="radio"
          name="tabs"
          className={`tab w-40 rounded-full cursor-pointer
          ${activeTab === "Products"
              ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white"
              : ""
            }`}
          aria-label="Products"
          defaultChecked
        />

        <input
          onClick={() => setActiveTab("Cart")}
          type="radio"
          name="tabs"
          className={`tab w-40 rounded-full cursor-pointer
          ${activeTab === "Cart"
              ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white"
              : ""
            }`}
          aria-label={`Cart (${cards.length})`}
        />

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
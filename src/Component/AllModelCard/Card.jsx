import React, { useState } from 'react'
import { FaDollarSign } from "react-icons/fa"
import { GoCheckCircle } from "react-icons/go"
import { toast } from 'react-toastify'

const Card = ({ card, cards, setCard }) => {

  const [buy, setBuy] = useState(false)

  const handleBuyButton = () => {

    const exists = cards.find(item => item.id === card.id)

    if (exists) {

      toast.warning("Already added")

      return

    }

    setBuy(true)

    setCard([...cards, card])

    toast.success(`${card.name} added`)

  }

  return (

    <div className="border border-gray-200 rounded-3xl p-6 min-h-[620px] hover:shadow-xl transition-all">

      {/* Tag */}

      <div className="flex justify-end mb-4">

        <span className={`text-xs font-semibold px-4 py-1.5 rounded-2xl
        ${card.tagType === "new" && "bg-green-100 text-green-700"}
        ${card.tagType === "popular" && "bg-orange-100 text-orange-700"}
        ${card.tagType === "best seller" && "bg-purple-100 text-purple-700"}
        `}>

          {card.tagType.toUpperCase()}

        </span>

      </div>


      {/* Icon */}

      <img
        className="h-25 w-25 rounded-full border border-gray-300 p-4 mb-3"
        src={card.icon}
        alt=""
      />


      {/* Title */}

      <h3 className="text-2xl font-semibold mb-1">

        {card.name}

      </h3>


      {/* Description */}

      <p className="text-gray-500 mb-4">

        {card.description}

      </p>


      {/* Price */}

      <div className="text-2xl font-bold mb-6 flex items-center gap-1">

        {

          card.price === 0

            ?

            (

              <span className="text-4xl font-bold text-emerald-600">

                Free

              </span>

            )

            :

            (

              <>

                <FaDollarSign />

                <span className="text-4xl">

                  {card.price}

                </span>

                <span className="text-gray-500 text-base">

                  /{card.period}

                </span>

              </>

            )

        }

      </div>


      {/* Features */}

      <ul className="space-y-3 mb-8">

        {

          card.features.map((feature, i) => (

            <li key={i} className="flex items-center gap-2">

              <GoCheckCircle className="text-green-500" />

              {feature}

            </li>

          ))

        }

      </ul>


      {/* Button */}

      <button
        onClick={handleBuyButton}
        className={`w-full py-4 rounded-2xl font-semibold transition

        ${buy
            ? "bg-green-500 text-white"
            : "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white"
          }
        `}
      >

        {buy ? "Added to Cart" : "Buy Now"}

      </button>

    </div>

  )

}

export default Card
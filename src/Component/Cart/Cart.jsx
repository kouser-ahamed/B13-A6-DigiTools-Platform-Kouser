import React from 'react'
import { toast } from 'react-toastify'
import { MdDelete } from "react-icons/md"
import { FaCartArrowDown } from "react-icons/fa6";

const Cart = ({ cards, setCard }) => {

    const totalPrice = cards.reduce((sum, card) => sum + card.price, 0)

    const handleCheckout = () => {

        toast.success("Payment successful")

        setCard([])

    }

    const handleDelete = (card) => {

        const filteredArray = cards.filter((c) => c.id !== card.id)

        toast.warning(`${card.name} removed`)

        setCard(filteredArray)

    }

    return (

        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 mb-10">

            <div className="px-6 py-5">

                <h2 className="text-2xl font-semibold">

                    Your Cart

                </h2>

            </div>

            {

                cards.length === 0

                    ?

                    (

                        <div>

                            <div className='flex justify-center h-40'>

                                <FaCartArrowDown className='pt-10 w-20 h-20 md:w-25 md:h-25' />

                            </div>

                            <p className='text-center font-bold m-3 text-3xl md:text-4xl mb-10'>

                                Your Cart Empty

                            </p>

                        </div>

                    )

                    :

                    (

                        <>

                            <div className="p-4 md:p-8 space-y-6">
                                {
                                    cards.map((card) => (
                                        <div
                                            key={card.id}
                                            className="flex items-center gap-4 md:gap-5 bg-gray-50 rounded-3xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all"
                                        >

                                            <div className="flex items-center gap-4 md:gap-5 min-w-0">

                                                <img
                                                    className="h-12 w-12 md:h-14 md:w-14 rounded-xl"
                                                    src={card.icon}
                                                    alt={card.name}
                                                />

                                                <div className="min-w-0">

                                                    <h4 className="font-semibold text-base md:text-lg truncate">
                                                        {card.name}
                                                    </h4>

                                                    <p className="text-gray-600 font-bold text-sm md:text-base">
                                                        ${card.price}
                                                    </p>

                                                </div>

                                            </div>

                                            <button
                                                onClick={() => handleDelete(card)}
                                                className="ml-auto flex items-center gap-2 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 whitespace-nowrap"
                                            >
                                                <MdDelete size={20} />
                                                Remove
                                            </button>

                                        </div>
                                    ))
                                }
                            </div>

                            <div className="p-6">

                                <div className="flex justify-between items-center mb-6">

                                    <span className="text-lg font-medium">

                                        Total

                                    </span>

                                    <span className="text-2xl md:text-3xl font-bold">

                                        ${totalPrice}

                                    </span>

                                </div>

                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 hover:from-[#3f2de0] hover:via-[#5a3cff] hover:to-[#6b52ff] text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                >

                                    Proceed To Checkout

                                </button>

                            </div>

                        </>

                    )

            }

        </div>

    )

}

export default Cart
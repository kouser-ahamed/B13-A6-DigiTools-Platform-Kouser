import React, { useEffect, useState } from 'react'
import Card from './Card'

const ModelLode = ({ dataPromise, cards, setCard }) => {

  const [data, setData] = useState([])

  useEffect(() => {

    dataPromise.then(res => setData(res))

  }, [])

  return (

    <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {

        data.map((card) => (

          <Card
            key={card.id}
            card={card}
            cards={cards}
            setCard={setCard}
          />

        ))

      }

    </div>

  )

}

export default ModelLode
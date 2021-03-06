import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({fourSushis, nextSushi, eatSushi, eatenSushis}) => {
  console.log({fourSushis, nextSushi, eatSushi, eatenSushis})
  
  const renderSushis = () => {
    return fourSushis.map(sushi => {
      return <Sushi name={sushi.name}
                    img_url={sushi.img_url}
                    price={sushi.price}
                    id={sushi.id}
                    key={sushi.id}
                    eatSushi={eatSushi}
                    eaten={eatenSushis.includes(sushi.id)}
                    />
    })
  }

  return (
    <Fragment>
      <div className="belt" >
        {
          renderSushis()
        }
        <MoreButton nextSushi={nextSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
import React,{useEffect, useRef} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const cardsRef=useRef();

useEffect(()=>{

},[])

const TitleCards = () => {
  return (
    <div className='title-cards'>
      <h2>Popular on Netflix</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card,index)=>{ 
        return <div className="card" key={index}>
          <img src={card.img} alt="" />
          <p>{card.name}</p>
          </div>})}
      </div>
    </div>
  )
}

export default TitleCards

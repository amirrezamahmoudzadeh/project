import React, { useEffect, useState } from "react";
import Card from "./components/Card/index";
import Cards from "./data/Cards";


function App() {
  
  const [cards, setCards] = useState(Cards)

  const selectCardHandler = (id)=>{
    let cardId = cards.findIndex((card => card.id === id))
    let selectedCard = {...cards[cardId]}
    selectedCard.selected= !selectedCard.selected

    let updatedCards = [...cards]
    updatedCards[cardId]=selectedCard
    setCards(updatedCards)

  }
  return (
    <div className="container">
      {cards.map((card)=>{
        return <Card id={card.id} key={card.id} isSelected={card.selected} onChangeColor={selectCardHandler} />
      })}
    </div>
  );
}

export default App;

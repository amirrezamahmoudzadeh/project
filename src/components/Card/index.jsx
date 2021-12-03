import React, {useState } from "react";
import Card from "./components/Card";
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
        return <Card id={card.id} key={card.id} select={card.selected} onChangeColor={selectCardHandler} />
      })}
    </div>
  );
}

export default App;

import React from 'react';
import './cardItem.css';

const CardItem = ({
  cardData = {},
  imageUrl = "",
  title = ""
}) => {
  return (
    <div className="card">
      <img className="card-image" alt="Avatar" src={cardData.thumbnailUrl || imageUrl} />
      <div className="container">
        <div className="card-title">{cardData.id}. {title}</div>
      </div>
    </div>
  )
}

export default CardItem;
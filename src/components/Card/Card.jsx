import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
const Card = ({ item }) => {
  return (
    <div>
      <Link className="link" to={`/product/${item.id}`}>
        <div className="card">
          <div className="imageContainer">
            {item.isNew && <span>New Season</span>}
            <img src={item.img} alt="" className="firstImg" />
            <img src={item.img2} alt="" className="secondImg" />
          </div>
          <p className="itemTitle">{item.title}</p>
          <div className="prices">
            <h3>${item.oldPrice}</h3>
            <h3>${item.price}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;

import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
const Card = ({item}) => {
  // console.log(props.item);
  return (
    <div>
      <Link className="link" to={`/product/${item.id}`}>
        <div className="card">
          <div className="imageContainer">
            {item.isNew && <span>New Season</span>}
            {/* <img src={item.img} alt="" className="Img1" />
            <img src={item.img2} alt="" className="Img2" /> */}
            {item.images.map((images)=>{
              return(<img src={images.img} alt="" className={`Img${images.id}`}/>)
              // <img src={images.img} alt="" className="" />
            })}
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

import React from "react";
import { data } from "../../Resources/StaticData/data";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Product = () => {
  const [selectedImg, setselectedImg] = useState(data[0].img);
  const [quantity, setquantity] = useState(0);
  // let mainImg;
  // const dataLength = data.length
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          {data?.map((item) => (
            <img
              src={item.img}
              alt=""
              onClick={(e) => setselectedImg(item.img)}
              key={item.id}
            />
          ))}
          {/* {mainImg = data.findIndex(obj => obj.id === selectedImg)} */}
        </div>
        <div className="mainImg">
          {/* {mainImg>=0 && <img src={data[mainImg].img} alt="" />} */}
          <img src={selectedImg} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="title">Title</div>
        <div className="price">$199</div>
        <div className="description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eius,
            suscipit commodi quod at assumenda magnam esse ad eveniet inventore
            distinctio, delectus, laudantium necessitatibus fuga! Itaque nihil
            deserunt ut, sit delectus error voluptatem nemo asperiores! Totam
            nesciunt ducimus exercitationem amet quaerat repudiandae, ipsam quas
            facilis dolor laborum quis iusto alias?
          </p>
        </div>

        <div className="quantity">
          <button
            onClick={() => setquantity((prev) => (prev === 0 ? 0 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setquantity((prev) => prev + 1)}>+</button>
        </div>

        <div className="buttons">
          <div className="addCart">
            <button className="cart">
              <AddShoppingCartIcon /> Add to cart
            </button>
          </div>
          <div className="otherButton">
            <div className="links">
              <FavoriteBorderOutlinedIcon /> Add to wish list
            </div >

            <div className="links" >
              <BalanceIcon /> Add to compare
            </div >
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

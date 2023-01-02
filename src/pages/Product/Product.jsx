import React from "react";
import { data } from "../../Resources/StaticData/data";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const productId = useParams().id ;

  const [selectedItem, setselectedItem] = useState(
    data[productId-1].images[0].img
  );
  const [quantity, setquantity] = useState(0);
  // const [addCartItem, setAddCartItem] = useState(null);
  const dispatch = useDispatch();

  let slectedItemId = data[productId-1];
  // const dataLength = data.length
  // console.log(data[productId])
  // console.log(productId)
  // useEffectb(() => {
  //   localStorage.setItem("ItemId",addCartItem)
  // }, [addCartItem])

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          {slectedItemId.images.map((item) => (
            <img
              src={item.img}
              alt=""
              onClick={(e) => setselectedItem(item.img)}
              key={item.id}
            />
          ))}
          {/* {slectedItemId = data.findIndex(obj => obj.id === selectedItem)} */}
          {/* {mainImg = data.findIndex(item => item.id === selectedImg)} */}
        </div>
        <div className="mainImg">
          <img src={selectedItem} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="title">{data[productId-1].title}</div>
        <div className="price">${data[productId-1].price}</div>
        <div className="description">
          <p>{data[productId-1].desc}</p>
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
            <button
              className="addcarticon"
              onClick={() => {
                dispatch(
                  addToCart({
                    itemId: productId,
                    quantity: quantity,
                  })
                );
              }}
            >
              <AddShoppingCartIcon /> Add to cart
            </button>
          </div>
          <div className="otherButton">
            <div className="links">
              <FavoriteBorderOutlinedIcon /> Add to wish list
            </div>

            <div className="links">
              <BalanceIcon /> Add to compare
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import "./Cart.scss";
import { data } from "../../Resources/StaticData/data";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
// import { json } from "react-router-dom";
// import { useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  // let id;
  // const cartItems = JSON.parse(localStorage.getItem("cartItem"));
  const cartItems = useSelector((state) => state.cart.products);
  console.log(cartItems);
  let carttotal = 0;
  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems?.map((item) => {
        const cartData = data[+item.itemId - 1];
        // console.log(cartData);
        return (
          <div className="item" key={cartData.id}>
            <img src={cartData.images[0].img} alt="" />
            <div className="details">
              <h1>{cartData.title}</h1>
              <p>{cartData.desc.substring(0, 50)}</p>
              <div className="price">$ {cartData.price}</div>
              <div className="itemQuantity">Quantity : {item.quantity}</div>
            </div>
            <button onClick={() => dispatch(removeItem(item.itemId))}>
              <DeleteOutlineIcon className="delete" />
            </button>
          </div>
        );
        // ));
      })}

      {/* {data?.map(item => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1> 
            <p>{item.desc.substring(0,50)}</p>
            <div className="price">$ {item.price}</div>
          </div>
          <DeleteOutlineIcon className='delete'/>
        </div>
      ))} */}
      <div className="total">
        <span>Sub Total</span>
        {cartItems?.map((items) => {
          return (carttotal += parseInt(
            data[+items.itemId - 1].price * items.quantity
          ));
        })}
        <span> $ {carttotal}</span>
      </div>
      <button>Proceed to checkout</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset
      </span>
    </div>
  );
};

export default Cart;

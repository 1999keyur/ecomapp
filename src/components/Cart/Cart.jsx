import React from 'react'
import "./Cart.scss";
import { data } from '../../Resources/StaticData/data';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const Cart = () => {
  return (
    <div className='cart'>
      <h1>Your Cart</h1>
      {data?.map(item => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1> 
            <p>{item.desc.substring(0,50)}</p>
            <div className="price">$ {item.price}</div>
          </div>
          <DeleteOutlineIcon className='delete'/>
        </div>
      ))}
      <div className="total">
        <span>Sub Total</span>
        <span>$123</span>
      </div>
      <button>Proceed to checkout</button>
      <span className='reset'>Reset</span>
      
    </div>
  )
}

export default Cart
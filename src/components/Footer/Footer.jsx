import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
    <div className="top">
      <div className="item">
        <h1>Categories</h1>
        <div className="category_item">
              <Link className="link" to="/category/men">
                Men
              </Link>
            </div>
            <div className="category_item">
              <Link className="link" to="/category/women">
                Women
              </Link>
            </div>
            <div className="category_item">
              <Link className="link" to="/category/children">
                Children
              </Link>
            </div>
      </div>
      <div className="item">
        <h1>Links</h1>
        <span>FAQ</span>
        <span>Pages</span>
        <span>Stores</span>
      </div>
      <div className="item">
        <h1>About</h1>
        <span>
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
          amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
          ut labore etdolore.
        </span>
      </div>
      <div className="item">
        <h1>Contact</h1>
        <span>
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
          amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
          ut labore etdolore.
        </span>
      </div>
    </div>
    <div className="bottom">
      <div className="left">
        <span className="logo">ECOMAPP</span>
        <span className="copyright">
          © Copyright 2023. All Rights Reserved
        </span>
      </div>
      <div className="right">
        <img src="/img/payment.png" alt="" />
      </div>
    </div>
  </div>
  )
}

export default Footer
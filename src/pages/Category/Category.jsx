import React from "react";
import "./Category.scss";
import { useState } from "react";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

const Category = () => {

  const categoryId = parseInt(useParams().id)
  // const [categories, setCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="category">
      <div className="left">
        <div className="filterItem">
          <h1>Product Categories</h1>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="1">Shirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="1">Accessories</label>
          </div>
        </div>
        <div className="filterItem">
          <h1>Filter By Price</h1>
          <span>0</span>
          <input
            type="range"
            min={0}
            max={1000}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <span>{maxPrice}</span>
        </div>
        <div className="filterItem">
          <h1>Sort By</h1>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price : Low to High</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="dec"
              value="dec"
              name="price"
              onChange={(e) => setSort("dec")}
            />
            <label htmlFor="dec">Price : High to Low</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />

        <List categoryId={categoryId} maxPrice={maxPrice} sort={sort}></List>
      </div>
    </div>
  );
};

export default Category;

import React from "react";
import { MenuList } from "../datas/data";
import Item from "../modules/item";
import "../styles/item.css";


const Home = () => {
    
  return (
    <div>
      <h1>Our Menu</h1>
      <div className="menuList">
        {MenuList.map((item, key) => {
          return (
            <Item
              key={key}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

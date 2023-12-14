import React from "react";

function Header() {
  return (
    <div className="headerSection">
      <div className="left">
        <div className="title">
          <h2>Life Style</h2>
        </div>
      </div>
      <div className="center">
        <ul>
          <li>men</li>
          <li>women</li>
          <li>kids</li>
          <li>beauty</li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="enter your order.." />
      </div>
      <div className="right">
        <div className="signin">signin / signup</div>
        <div className="cart">cart</div>
        <div className="love">💓</div>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "./Header.css";
import Logo from "./Image/logo.png";
import Food1 from "./Image/foods1.png";
import Food2 from "./Image/food2.jpg";
import Food3 from "./Image/food3.png";
import Food4 from "./Image/food4.jpg";
import Food5 from "./Image/food5.jpg";
import Food6 from "./Image/food6.png";

function Header() {
  return (
    <>
      <nav className="header">
        <div className="logo">
          <img src={Logo} alt="logo" className="logo_img" />
        </div>
        <ul className="ul">
          <li className="li">
            <a href="#">Home</a>
          </li>
          <li className="li">
            <a href="#">Food Menu</a>
          </li>
          <li className="li">
            <a href="#">About Us</a>
          </li>
          <li className="li">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <section className="main_content">
        <h2 className="h2">Welcome MyFood</h2>
        <p className="p">
          Order online Foods all over india Veg non-Veg online Foods all over
        </p>
        <p className="p">Order online india Veg non-Veg</p>
        <button className="buton">Order Now</button>
      </section>
      <section className="food_item">
        <h1 className="food_h1">Food Menu</h1>
        <div className="food_menu">
          <div className="food_box">
            <img src={Food1} alt="food_image" className="food_image" />
            <h3>Chicken Fry</h3>
            <p>You can try chicken Fry</p>
          </div>
          <div className="food_box">
            <img src={Food2} alt="food_image" className="food_image" />
            <h3>Crunchy</h3>
            <p>So cruncy can eat</p>
          </div>
          <div className="food_box">
            <img src={Food3} alt="food_image" className="food_image" />
            <h3>Orange Salad</h3>
            <p>Orange Salad So tasty</p>
          </div>
          <div className="food_box">
            <img src={Food4} alt="food_image" className="food_image" />
            <h3>Chicken Fry</h3>
            <p>You can try chicken Fry</p>
          </div>
          <div className="food_box">
            <img src={Food5} alt="food_image" className="food_image" />
            <h3>Crunchy</h3>
            <p>So cruncy can eat</p>
          </div>
          <div className="food_box">
            <img src={Food6} alt="food_image" className="food_image" />
            <h3>Orange Salad</h3>
            <p>Orange Salad So tasty</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;

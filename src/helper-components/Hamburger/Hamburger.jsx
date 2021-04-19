import React from 'react'
import "./Hamburger.scss";
import { FaRegWindowClose } from "react-icons/fa"
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/Routes";

function Hamberger({ setIsHambergerOpen }) {
  const handleClick = () => {
    setIsHambergerOpen(false);
  }
  return (
    <div className="hamberger__container">
      <FaRegWindowClose className="close__icon" onClick={handleClick} />
      <div className="hamberger__items">
        <Link className="hamberger__link" to={`${ROUTES.PRODUCTS}/electronics`}>
          <div onClick={handleClick}>Electronics</div>
        </Link>
        <Link className="hamberger__link" to={`${ROUTES.PRODUCTS}/men`}>
          <div onClick={handleClick}>Men's Clothing</div>
        </Link>
        <Link className="hamberger__link" to={`${ROUTES.PRODUCTS}/lady`}>
          <div onClick={handleClick}>Women's Clothing</div>
        </Link>
        <Link className="hamberger__link" to={`${ROUTES.PRODUCTS}/kid`}>
          <div onClick={handleClick}>Kid's Clothing</div>
        </Link>
      </div>
    </div>
  )
}

export default Hamberger

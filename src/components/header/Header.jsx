import React from 'react'
import billGates from "../../assets/billgates.jpg"
import './header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <img src={billGates} alt="" />
        <span>Spend Bill Gates' Money</span>
    </div>
  )
}

export default Header;
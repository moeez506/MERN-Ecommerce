import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo1.png";
// import {FaUserAlt} from 'react-icons/fa'
import {FaSearch, FaUserAlt, FaCartPlus} from 'react-icons/fa'
// const options = {
  
// };

const Header = () => {
  return ( 
  <ReactNavbar 
    burgerColorHover= "#eb4034"
    logo={logo} 
    logoWidth= "20vmax" 
    navColor1= "white" 
    logoHoverSize= "10px" 
    logoHoverColor= "#eb4034" 
    link1Text= "Home" 
    link2Text= "Products" 
    link3Text= "Contact" 
    link4Text= "About" 
    link1Url= "/" 
    link2Url= "/products" 
    link3Url= "/contact" 
    link4Url= "/about" 
    link1Size= "1.9vmax" 
    link1Color= "black" 
    nav1justifyContent= "flex-end" 
    nav2justifyContent= "flex-end" 
    nav3justifyContent= "flex-start" 
    nav4justifyContent= "flex-start" 
    link1ColorHover= "#eb4034" 
    link1Margin= "1vmax" 
    profileIcon= "true"
    ProfileIconElement={FaUserAlt} 
    profileIconUrl= "/login"
    profileIconColor= "rgba(35, 35, 35,0.8)"
    searchIcon= "true"
    SearchIconElement={FaSearch} 
    searchIconColor= "rgba(35, 35, 35,0.8)"
    cartIcon= "true"
    CartIconElement={FaCartPlus}
    cartIconColor= "rgba(35, 35, 35,0.8)"
    profileIconColorHover= "#eb4034"
    searchIconColorHover= "#eb4034"
    cartIconColorHover= "#eb4034"
    cartIconMargin= "1vmax"
    searchIconMargin= "1vmax"
    profileIconMargin= "1vmax"

/>
);
};

export default Header;
import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import './Intro.scss'

function Intro(props) {


  return (

  <div className= "content" >


    <h1 className= "content__title">Cold bar</h1>
    <button  className="content__bShop">  <Link to={ `/Main`} className="content__bLink">Go to shop!</Link></button>

  </div>
   
  );
}




export default Intro;
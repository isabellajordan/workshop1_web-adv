import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import './Display.scss';

import uiContext from '../../context/uiContext';

var ballArray = [
   2,2,5
];


function AdminBolas() {

  return (
  <div className="iceCream__contBall">

    {ballArray.map((element, index) => {
      return <div className="iceCream__ball"></div>
      
    }) }

  </div>
  );
}



function Display(props) {

  const info = useContext(uiContext);


  return (

    <div className="Display" >

      <div className="iceCream" style={{ transform: "scale(" + props.size / 100 + ")", backgroundImage: info.vanilla }} >

        <AdminBolas />

        <div className="iceCream__cone"></div>

      </div>

    </div>

  );
}



export default Display;
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import './ButtonIce.scss';

import uiContext from '../../context/uiContext';
import { getThemeProps } from '@material-ui/styles';

function ButtonIce(props) {

    const info= useContext(uiContext);
    console.log("valor size" + info.size);


    return (

        <div className= "Editor__iceCreams__chocolate"  >
        <img className="Editor__iceCreams__img"  src={props.image} alt='chocolate'/>
        <p className="Editor__iceCreams__texto" >{props.name} </p>
        </div>

    );
}

export default ButtonIce;
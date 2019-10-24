import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core';
import './Editor.scss';
import ButtonIce from '../ButtonIce/ButtonIce';


import uiContext from '../../context/uiContext';

var vanilla = '/img/vanilla.svg';


function Editor(props) {

   
    const info = useContext(uiContext);


  return (

  <div className="Editor" >

      <div className= "Editor__titleFlavor">Choose your favorite ice cream flavor</div>

        
        <article className= "Editor__iceCreams">     

        <ButtonIce name={'Chocolate'} image={' /img/chocolate.svg'} > </ButtonIce>
        <ButtonIce name={'Vanilla'} image={' /img/vanilla.svg'} > </ButtonIce>
        <ButtonIce name={'Strawberry'} image={' /img/strawberry.svg'} > </ButtonIce>
        <ButtonIce name={'Napolitan'} image={' /img/napolitan.svg'} > </ButtonIce>
        <ButtonIce name={'Raspberry'} image={' /img/raspberry.svg'} > </ButtonIce>
        <ButtonIce name={'Lemonade'} image={' /img/lemonade.svg'} > </ButtonIce>
        <ButtonIce name={'Mint Choco'} image={' /img/mintChocolate.svg'} > </ButtonIce>
        <ButtonIce name={'Cookies'} image={' /img/cookies.svg'} > </ButtonIce>
        <ButtonIce name={'Coffee'} image={' /img/coffee.svg'} > </ButtonIce>
        <ButtonIce name={'Rainbow'} image={' /img/rainbow.svg'} > </ButtonIce>

  

        </article>  



      

    <input min={50} max={100} defaultValue={50} onChange={ (e) => {
        info.setSize(e.target.value);
        console.log('info que pasa'+ e.target.value);
        console.log('info que recibe '+ info.size);
    } } type="range" className="inputSize"/>

  </div>
   
  );
}



export default Editor;
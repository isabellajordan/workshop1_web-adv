import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import './Main.scss';
import Editor from '../../components/Editor/Editor';
import Display from '../../components/Display/Display';
import uiContext from '../../context/uiContext';



function Main() {

    const info= useContext(uiContext);
    console.log("valor size" + info.size);


    /*
    function handleClick(){

    };

    */



    return (

        <div className="Main" >

                <Editor setSize= {info.setSize} />
                <Display size= {info.size } />


        </div>

    );
}




export default Main;
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from '../Main/Main';
import uiContext from '../../context/uiContext';
import Intro from '../Intro/Intro';



function App() {

  
  const [ size, setSize ] = React.useState(50);

  const context = {
    size: size,
    setSize: setSize,
  }


  return (

<uiContext.Provider value={context} >

<Router>

      <Route path="/" exact component={Intro} />
      <Route path="/Main" component ={Main}/>

      

    </Router>

</uiContext.Provider>
    

  );
}



export default App;

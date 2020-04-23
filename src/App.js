import React from 'react';
import PropTypes from "prop-types";
//function component
/*
function Potato( {fav , image , rating} ){
  return <div>
             <h1>  like {fav} </h1>
             <h3> {rating}/5.0 </h3>
             <img src={image} alt={fav}/>
        </div>;
}*/

//react class component
class App extends React.Component{
  state = {
    count: 0
  };
  render() {
    return <h1>Im a class component { this.state.count }</h1>;
  }
}

export default App;

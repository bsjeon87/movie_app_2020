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

  constructor(){
    super();
    console.log("hello");
  }
  add = () => {
    console.log("add");
  //  this.state.count = 1;
    this.setState(current => ({count: current.count + 1})); // recall render again
  };
  minus=()=>{
    console.log("minus");
//    this.state.count = -1;
    this.setState(current => ({count: current.count - 1}));

  };
  componentWillUnmount(){
    console.log("unmount");
  }
  componentDidUpdate(){
    console.log("component updated");
  }
  componentDidMount(){
    console.log("component rendered");
  }
  render() {// automatically called
    console.log("render");
    return  (
      <div>
        <h1>The number is: { this.state.count }</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );


  }
}

export default App;

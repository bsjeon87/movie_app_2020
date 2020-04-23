import React from 'react';

function Potato( {fav , image} ){
  return <div>
             <h1>  like {fav} </h1>
             <img src={image} alt={fav}/>
        </div>;
}
const foodILike = [
{
  id:3,
  name: "kimchi",
  image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/10/10/e1d38d22a01a5f11619e141e089f66cb1.jpg"
},
{
  id:2,
  name: "don",
  image: "https://www.google.co.kr/imgres?imgurl=https%3A%2F%2Fimg.sbs.co.kr%2Fnewsnet%2Fetv%2Fupload%2F2014%2F01%2F10%2F30000347969_1280.jpg&imgrefurl=http%3A%2F%2Fsbsfune.sbs.co.kr%2Fnews%2Fnews_content.jsp%3Farticle_id%3DE10004919505&tbnid=yNie3dJ4ein_VM&vet=12ahUKEwiqzIqTxP_oAhVVA5QKHTPmCa4QMygBegUIARCTAg..i&docid=3bl0-3keqw56UM&w=640&h=428&q=%EB%8F%88%EA%B0%80%EC%8A%A4&ved=2ahUKEwiqzIqTxP_oAhVVA5QKHTPmCa4QMygBegUIARCTAg"
},

];
/*
function Potato(prop){
  console.log(prop);
  return <h1>  like {props.fav}}</h1>;
}
*/
/*
function renderFood(dish){
  return <Potato fav={dish.name} image={dish.image}/>
}*/
function App() {
  return  (
    <div>
       <h1>Hello</h1>
       {foodILike.map(dish => <Potato key={dish.id} fav={dish.name} image={dish.image}/>)}

     </div>
  );
}

/*
   {foodILike.map(dish => <Potato fav={dish.name} image={dish.image}/>)}
  <Potato name = "food_name" fav="e" />
   <Potato name = "food_name" fav="kimchi" />
   <Potato name = "food_name" fav="s" />
   <Potato name = "food_name" fav="r" />
   <h1>Hello</h1>
   {console.log(foodILike.map(renderFood))}
   {foodILike.map(renderFood)}
  // <Potato name = "food_name" fav="kimchi" something={true} paapa={["hello", 1,2]}/>
*/

export default App;

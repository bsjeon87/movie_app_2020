import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
//function component
/*
function Potato( {fav , image , rating} ){
  return <div>
             <h1>  like {fav} </h1>
             <h3> {rating}/5.0 </h3>
             <img src={image} alt={fav}/>
        </div>;
}*/

/*    {isLoading ? "Loading...": movies.map(movie => {
      console.log(movie);
      return <Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
    })} */
//react class component
class App extends React.Component{
  state = {
     isLoading: true,
     movies: []
  };

  getMovies = async function(){
     const {data: { data : {movies} } }= await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
     //console.log(movies);
     this.setState({movies:movies , isLoading: false});
  } //same as below
  /*
  getMovies = async() =>{
     const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }*/
  componentDidMount(){
//    setTimeout(  () => { this.setState({isLoading: false});
//    } , 6000);
  //   const movies = axios.get("https://yts-proxy.now.sh/list_movies.json")
    this.getMovies();
  }
  render() {// automatically called
    console.log("render");
    const { isLoading , movies } = this.state;
    return  (
      <div>


      {isLoading ? "Loading..."
                :  movies.map(movie =>
                    <Movie
                           key={movie.id}
                           id={movie.id}
                           year={movie.year}
                           title={movie.title}
                           summary={movie.summary}
                           poster={movie.medium_cover_image} />
      )}
      </div>
    );


  }
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {fetchMoviesFromApi,changeRating} from '../actions/moviesActions'
import '../styles/homePage.css'
import star1 from '../styles/star1.jpeg'
import star2 from '../styles/star2.png'
import {MovieActions} from '../actions/moviesActions'
class HomePage extends React.Component
{
    componentDidMount()
    {
      this.props.fetchMoviesCall();
    }
    alterRating=(id,rating)=>{
      this.props.changeRatingInStore(id,rating);
    }
    render()
    {
        const {movies} = this.props.moviesStore;
        return (
          <div>
            {movies &&
              Object.keys(movies).map((key)=>{
                function stars(value)
                {
                    if(value<=movies[key].rating)
                    {
                      return {color:'yellow',fontSize:'30px'};
                    }
                    else{
                      return {color:'black',fontSize:'20px'};
                    }
                }
                return <div key={movies[key].id} className="card" style={{display:'flex'}}>
                            <div id="image" style={{background:`url(${movies[key].image})`}}>
                            </div>
                            <div id="displayContent">
                              <h2 className="title">
                                {movies[key].title}
                              </h2>

                              <p>{movies[key].description}</p>
                              <div style={{display:'flex'}}>
                                <div className="rating" style={stars(1)} onClick={()=>this.alterRating(key,1)}>
                                ★
                                </div>
                                <div className="rating" style={stars(2)} onClick={()=>this.alterRating(key,2)}>
                                ★
                                </div>
                                <div className="rating" style={stars(3)} onClick={()=>this.alterRating(key,3)}>
                                ★
                                </div>
                                <div className="rating" style={stars(4)} onClick={()=>this.alterRating(key,4)}>
                                ★
                                </div>
                                <div className="rating" style={stars(5)} onClick={()=>this.alterRating(key,5)}>
                                ★
                                </div>
                              </div>
                            </div>

                      </div>
              })
            }
          </div>
        );
    }
}
function mapStateToProps({moviesStore})
{
  return {moviesStore};
}
function mapDispatchToProps(dispatch)
{
  return {
    fetchMoviesCall:()=>{dispatch(MovieActions.fetchMoviesFromApi())},
    changeRatingInStore:(id,value)=>{dispatch(MovieActions.changeRating(id,value))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);

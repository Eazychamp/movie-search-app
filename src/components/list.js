import React, { Component } from 'react';
import MovieDetail from './detail';
import '../static/main.css';
import axios from 'axios';

class ListMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            detail : []
        }
    }
    
    handleClick = (id) => {
        const api_key = process.env.REACT_APP_MOVIES_API_KEY;
        // let id = id;
        // let id = '343611'
        const baseURL = 'https://api.themoviedb.org/3/movie/';
        axios.get(`${baseURL}${id}?api_key=${api_key}`)
        .then( (response) => {
            console.log(response)
                this.setState({
                    detail : response.data
                })
              })
    } 

    render() {
        let movies = '';
        if (this.props.movies.results) {
            movies = this.props.movies.results.map((movie, index) => {
                return ( 
                    <div onClick={() => this.handleClick(movie.id)} className="col-md-10 mt-4 box" key={index}>
                        <h4 >{movie.original_title}</h4>
                        Released on-<p>{movie.release_date}</p>
                        Rating - <p>{movie.vote_average}</p>
                        {/* <img src={movie.poster_path} alt="pos"/> */}
                    </div>
                )
            } )
        }
        else {
            movies = <div className="col-12 alert alert-info mt-2">No records found</div>
          }
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-5">
                    
                    {movies}
                
                </div>
                <div className="col-md-7">
                    <MovieDetail detail={this.state.detail}/>
                </div>
            </div>
            </div>
        )
    }
}

export default ListMovies;
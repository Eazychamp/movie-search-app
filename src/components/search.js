import React, { Component } from 'react';
import axios from 'axios';
import ListMovies from './list';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query : '',
            movies : []
        }
    }
    
    

    handleChange = (event) => {
        this.setState({
            query : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const api_key = process.env.REACT_APP_MOVIES_API_KEY
        let data = this.state.query
        const baseURL = 'https://api.themoviedb.org/3/search/movie?api_key=';
        axios.get(`${baseURL}${api_key}&query=${data}`)
        .then( (response) => {
                this.setState({
                    movies : response.data
                }, () => console.log(this.state.movies))
              })
    }
    


    render() {
        
        return (
            <>
            <div className="row">
                <div className="col-xs-10 col-sm-10 col-md-5 col-lg-5 ml-auto mr-auto mt-4">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter movie name" name="movie" onChange={this.handleChange}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Search ...</button>
                    </form>
                </div>
            </div>
            <ListMovies movies = {this.state.movies}/>
            </>
        );
    }
}

export default Search;
import React, { Component } from 'react';


export default class MovieDetail extends Component {

    render() {
        const {detail} = this.props
        return(
            <div className="container row">
                <div className="col-md-10">
                <center><h2>{detail.original_title}</h2></center>
                <small>{detail.overview}</small>
                Released on - <p>{detail.release_date}</p>
                Rating - <h5>{detail.vote_average}</h5>
                Total Vote - <h5>{detail.vote_count}</h5>
                </div>
            </div>

        )
    }

}
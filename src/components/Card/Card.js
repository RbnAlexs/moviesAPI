import React from "react";

const Card = ({ movie }) => {
    return (
        <div className="col-md-3">
            <div className="card">
                <img src={movie.Poster} alt={movie.Title} className="card-img-top rounded mx-auto d-block" />
                <div className="card-body">
                    <h2 className="card-title">{movie.Title} ({movie.Year})</h2>
                    <p className="card-text">{movie.Type}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Card;

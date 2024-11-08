import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import './MovieDetails.css'; // Importing a CSS file for custom styles

const MovieDetails = () => {
    const param = useParams();
    const [movie, setMovie] = useState({});

    // get movie by details 
    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=en`);
        setMovie(res.data);
    };

    useEffect(() => {
        getMovieDetails();
    }, []);

    return (
        <div className="container">
            <Row className="justify-content-center">
                <Col md={8} sm={12} className="mt-4">
                    <div className="card-details d-flex flex-column align-items-center">
                        <img
                            className="img-movie img-fluid w-50 mb-3"
                            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                            alt={movie.title}
                        />
                        <div className="text-center">
                            <p className="card-text-details border-bottom responsive-text">
                                Movie Name: {movie.title}
                            </p>
                            <p className="card-text-details border-bottom responsive-text">
                                Release Date of the Movie: {movie.release_date}
                            </p>
                            <p className="card-text-details border-bottom responsive-text">
                                Number of raters: {movie.vote_count}
                            </p>
                            <p className="card-text-details border-bottom responsive-text">
                                Rating: {movie.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={10} sm={12} className="mt-1">
                    <div className="card-story d-flex flex-column align-items-start">
                        <div className="text-end p-4">
                            <p className="card-text-title border-bottom responsive-text">Story </p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story responsive-text">{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={10} sm={12} className="mt-2 d-flex justify-content-center">
                    <Link to="/">
                        <button className="btn btn-primary mx-2" style={{ backgroundColor: "#b45b35", border: "none" }}>
                            Back to home page
                        </button>
                    </Link>
                    {movie.homepage && (
                        <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary" style={{ backgroundColor: "#b45b35", border: "none" }}>
                                Watch the movie
                            </button>
                        </a>
                    )}
                </Col>
            </Row>
        </div>
    );
}

export default MovieDetails;

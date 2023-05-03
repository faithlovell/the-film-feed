import React from "react";
import "./App.css"; // import CSS file

import HarryPotter1 from "./Movies_images/HarryPotter1.png";
import HungerGames from "./Movies_images/Hunger_Games.png";
import Aladdin from "./Movies_images/Aladdin.png";
import Avatar from "./Movies_images/Avatar.png";
import Avengers from "./Movies_images/Avengers.png";

export interface Movie {
    title: string;
    cast: string[];
    rating: string;
    inTheaters: boolean;
    image: string;
}

interface MovieProps {
    movie: Movie;
}

export class MovieItem extends React.Component<MovieProps> {
    render() {
        const { movie } = this.props;
        return (
            <div>
                {" "}
                <img
                    src={movie.image}
                    alt={movie.title}
                    style={{ maxWidth: "200px" }}
                />
                <h3>{movie.title}</h3>
                <p>Rating: {movie.rating}</p>
            </div>
        );
    }
}
interface MovieListProps {
    movies: Movie[];
}

export default class MovieList extends React.Component<MovieListProps> {
    render() {
        const { movies } = this.props;
        return (
            <div>
                {movies.map((movie) => (
                    <MovieItem key={movie.title} movie={movie} />
                ))}
            </div>
        );
    }
}

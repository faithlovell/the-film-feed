import React from "react";
import "./App.css"; // import CSS file

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

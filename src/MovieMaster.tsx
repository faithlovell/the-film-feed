import React from "react";

interface Movie {
    title: string;
    cast: string[];
    rating: "G" | "PG" | "R" | "unrated";
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
                <img src={movie.image} alt={movie.title} />
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

const movies = [
    {
        title: "Movie 1",
        cast: ["Actor 1", "Actor 2"],
        rating: "PG",
        inTheaters: true,
        image: "https://example.com/movie1.jpg",
    },
    {
        title: "Movie 2",
        cast: ["Actor 3", "Actor 4"],
        rating: "R",
        inTheaters: false,
        image: "https://example.com/movie2.jpg",
    },
    // add more movies here
];
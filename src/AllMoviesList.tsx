import React from "react";
import "./AllMoviesList.css"; // import CSS file
import { Movie, MovieItem } from "./MovieMaster";

interface AllMoviesListProps {
    movies: Movie[];
    onSave: (movie: Movie) => void;

    roll: string;
}

export function AllMoviesList({ movies, onSave }: AllMoviesListProps) {
    return (
        <div className="all-movies-list">
            {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} onSave={onSave} />
            ))}
        </div>
    );
}

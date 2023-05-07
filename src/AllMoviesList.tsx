import React from "react";
import "./AllMoviesList.css"; // import CSS file
import { Movie, MovieItem } from "./MovieMaster";

interface AllMoviesListProps {
    movies: Movie[];
    onSave: (movie: Movie) => void;
    role: string;
}

export function AllMoviesList({ movies, onSave, role }: AllMoviesListProps) {
    return (
        <>
            {role === "Movie Mentor" || role === "Movie Master" ? (
                <div className="all-movies-list">
                    <h2 className="title">All Movies</h2>
                    <div className="movie-images">
                        {movies.map((movie) => (
                            <MovieItem
                                key={movie.id}
                                movie={movie}
                                onSave={onSave}
                            />
                        ))}
                    </div>
                </div>
            ) : null}
        </>
    );
}

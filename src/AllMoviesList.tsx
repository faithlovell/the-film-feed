import React, { useState } from "react";
import "./AllMoviesList.css"; // import CSS file
import { Movie, MovieItem } from "./MovieMaster";

interface AllMoviesListProps {
    movies: Movie[];
    onSave: (movie: Movie) => void;
    onDelete: (movieToDelete: Movie) => void;
    role: string;
}

export function AllMoviesList({
    movies,
    onSave,
    onDelete,
    role
}: AllMoviesListProps) {
    const [filter, setFilter] = useState("");

    const handleFilterChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFilter(event.target.value);
    };

    const filteredMovies = movies.filter((movie) => {
        if (filter === "") {
            return true;
        } else if (filter === "inTheaters") {
            return movie.inTheaters;
        } else if (filter === "ratingG") {
            return movie.rating === "G";
        } else if (filter === "ratingPG") {
            return movie.rating === "PG";
        } else if (filter === "ratingPG13") {
            return movie.rating === "PG-13";
        } else if (filter === "ratingR") {
            return movie.rating === "R";
        }
        return false;
    });

    const handleDragStart = (
        event: React.DragEvent<HTMLDivElement>,
        movie: Movie
    ) => {
        event.dataTransfer.setData("text/plain", JSON.stringify(movie.title));
    };

    return (
        <>
            {role === "Movie Mentor" || role === "Movie Master" ? (
                <div className="all-movies-list">
                    <h2 className="title">Movies</h2>
                    <div className="filters">
                        <select
                            value={filter}
                            onChange={handleFilterChange}
                            className="filter-dropdown"
                        >
                            <option value="">All</option>
                            <option value="inTheaters">In Theaters</option>
                            <option value="ratingG">G</option>
                            <option value="ratingPG">PG</option>
                            <option value="ratingPG13">PG-13</option>
                            <option value="ratingR">R</option>
                        </select>
                    </div>
                    <div className="movie-images">
                        {filteredMovies.map((movie) => (
                            <div
                                key={movie.id}
                                draggable
                                onDragStart={(event) =>
                                    handleDragStart(event, movie)
                                }
                            >
                                <MovieItem
                                    movie={movie}
                                    onSave={onSave}
                                    onDelete={onDelete}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </>
    );
}

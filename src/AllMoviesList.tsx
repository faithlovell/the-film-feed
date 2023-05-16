import React, { useState } from "react";
import "./AllMoviesList.css"; // import CSS file
import { Movie, MovieItem } from "./MovieMaster";

interface AllMoviesListProps {
    movies: Movie[];
    onSave: (movie: Movie) => void;
    onDelete: (movieToDelete: Movie) => void;
    role: string;
    draggable: boolean;
    onDragStart: (e: React.DragEvent<HTMLDivElement>, movie: Movie) => void;
    user: string;
}

export function AllMoviesList({
    movies,
    onSave,
    onDelete,
    role,
    user
}: AllMoviesListProps) {
    const [filter, setFilter] = useState("");

    //handles user changing filter option by passing filter value
    const handleFilterChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFilter(event.target.value);
    };

    //implemented to aid with movie drag ability
    function handleOnDrag(e: React.DragEvent<HTMLDivElement>, movie: Movie) {
        e.dataTransfer.setData("movie", JSON.stringify(movie));
    }

    //filters movies by rating or in theaters
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

    return (
        <>
            <>
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
                            <MovieItem
                                key={movie.id}
                                movie={movie}
                                onSave={onSave}
                                draggable={true}
                                onDragStart={(e) => handleOnDrag(e, movie)}
                                role={role}
                                onDelete={onDelete}
                                user={user}
                            />
                        ))}
                    </div>
                </div>
            </>
        </>
    );
}

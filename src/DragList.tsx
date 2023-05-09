import React, { useState } from "react";
import { Movie, MovieItem } from "./MovieMaster";

interface DragListsProps {
    role: string;
}

export function DragLists({ role }: DragListsProps) {
    const [superMovies, setSuperMovies] = useState<Movie[]>([]);
    const [adminMovies, setAdminMovies] = useState<Movie[]>([]);
    const [userMovies, setUserMovies] = useState<Movie[]>([]);

    function handleOnDrag(e: React.DragEvent, movie: Movie) {
        e.dataTransfer.setData("movie", JSON.stringify(movie)); //added this not sure if its right yet
    }

    function handleOnDropSuper(e: React.DragEvent) {
        const movie = JSON.parse(e.dataTransfer.getData("movie")) as Movie;
        if (!superMovies.includes(movie)) {
            setSuperMovies([...superMovies, movie]);
            if (!adminMovies.includes(movie)) {
                setAdminMovies([...adminMovies, movie]);
            }
        }
    }

    function handleOnDropAdmin(e: React.DragEvent) {
        const movie = JSON.parse(e.dataTransfer.getData("movie")) as Movie;
        if (!adminMovies.includes(movie)) {
            setAdminMovies([...adminMovies, movie]);
        }
    }

    function handleOnDropUser(e: React.DragEvent) {
        const movie = JSON.parse(e.dataTransfer.getData("movie")) as Movie;
        setUserMovies([...userMovies, movie]);
    }

    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    function handleUserOnSave(movie: Movie) {
        setUserMovies((prevMovies) =>
            prevMovies.map((prevMovie) =>
                prevMovie.id === movie.id ? { ...movie } : prevMovie
            )
        );
    }

    function handleSuperOnSave(movie: Movie) {
        setSuperMovies((prevMovies) =>
            prevMovies.map((prevMovie) =>
                prevMovie.id === movie.id ? { ...movie } : prevMovie
            )
        );
    }

    function handleAdminOnSave(movie: Movie) {
        setAdminMovies((prevMovies) =>
            prevMovies.map((prevMovie) =>
                prevMovie.id === movie.id ? { ...movie } : prevMovie
            )
        );
    }

    function handleDragStart(e: React.DragEvent, movie: Movie) {
        e.dataTransfer.setData("movie", JSON.stringify(movie));
    }

    function handleDragEnd(e: React.DragEvent) {
        e.preventDefault();
    }

    return (
        <div className="DragLists">
            <div
                className="movie"
                draggable
                onDragStart={(e) =>
                    handleOnDrag(e, {
                        id: 1,
                        title: "Harry Potter and the Philosopher's Stone",
                        cast: [
                            "Daniel Radcliffe",
                            "Emma Watson",
                            "Rupert Grint"
                        ],
                        rating: "PG",
                        audienceRating: 0,
                        inTheaters: true,
                        image: "x"
                    })
                } // not adding bc the function doesnt ahave place to drop
            >
                Movie 1
            </div>
            <div className="container">
                {role === "Movie Master" && (
                    <>
                        <div className="list0-label">Super List</div>
                        <div
                            className="list0"
                            onDrop={handleOnDropSuper}
                            onDragOver={handleDragOver}
                        >
                            {superMovies.map((movie, index) => (
                                <div
                                    key={index}
                                    className="dropped-movie"
                                    draggable
                                    onDragStart={(e) =>
                                        handleDragStart(e, movie)
                                    }
                                    onDragEnd={handleDragEnd}
                                >
                                    <MovieItem
                                        key={movie.id}
                                        movie={movie}
                                        onSave={handleSuperOnSave}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                )}
                {role === "Movie Mentor" && (
                    <>
                        <div className="list1-label">Admin List</div>
                        <div
                            className="list1"
                            onDrop={handleOnDropAdmin}
                            onDragOver={handleDragOver}
                        >
                            {adminMovies.map((movie, index) => (
                                <div key={index} className="dropped-movie">
                                    <MovieItem
                                        movie={movie}
                                        key={movie.id}
                                        onSave={handleAdminOnSave}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {role === "Movie Member" && (
                    <>
                        <div className="list1-label">User List</div>
                        <div
                            className="list2"
                            onDrop={handleOnDropUser}
                            onDragOver={handleDragOver}
                        >
                            {userMovies.map((movie, index) => (
                                <div key={index} className="dropped-movie">
                                    <MovieItem
                                        movie={movie}
                                        key={movie.id}
                                        onSave={handleUserOnSave}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import { Movie, MovieItem } from "./MovieMaster";

export interface DragListsProps {
    role: string;
}

export function DragLists({ role }: DragListsProps) {
    const [superMovies, setSuperMovies] = useState<Movie[]>([]);
    const [adminMovies, setAdminMovies] = useState<Movie[]>([]);
    const [userMovies, setUserMovies] = useState<Movie[]>([]);

    function handleOnDrag(e: React.DragEvent, movie: Movie) {
        e.dataTransfer.setData("movie", JSON.stringify(movie)); //added this not sure if its right yet
    } //try adding this to allmovieslist.tsx

    function handleOnDropSuper(e: React.DragEvent) {
        const movie = JSON.parse(e.dataTransfer.getData("movie")) as Movie;
        if (!superMovies.includes(movie)) {
            setSuperMovies([...superMovies, movie]);
            if (!adminMovies.includes(movie)) {
                setAdminMovies([...adminMovies, movie]);
            }
        }
    }

    function checkDuplicates(movie1: Movie, movie2: Movie) {
        return movie1.id == movie2.id;
    }

    function handleOnDropAdmin(e: React.DragEvent) {
        const movie = JSON.parse(e.dataTransfer.getData("movie")) as Movie;
        if (
            !adminMovies.some((existingMovie) =>
                checkDuplicates(existingMovie, movie)
            )
        ) {
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
    function handleDelete(movie: Movie) {
        setSuperMovies(superMovies.filter((m) => m.id !== movie.id));
        setAdminMovies(adminMovies.filter((m) => m.id !== movie.id));
        setUserMovies(userMovies.filter((m) => m.id !== movie.id));
    }

    return (
        <div className="content-lists">
            {role === "Movie Master" && (
                <>
                    <div className="list0-label">Movie Master List</div>
                    <div
                        className="list0"
                        onDrop={handleOnDropSuper}
                        onDragOver={handleDragOver}
                    >
                        {superMovies.map((movie, index) => (
                            <div key={index} className="dropped-movie">
                                <MovieItem
                                    key={movie.id}
                                    movie={movie}
                                    onSave={handleSuperOnSave}
                                    onDelete={handleDelete}
                                    draggable={true}
                                    role={role}
                                    onDragStart={function (
                                        e,
                                        movie: Movie
                                    ): void {
                                        throw new Error(
                                            "Function not implemented."
                                        );
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </>
            )}

            {role === "Movie Mentor" && (
                <>
                    <div className="list1-label">Movie Mentor List</div>
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
                                    onDelete={handleDelete}
                                    role={role}
                                    onDragStart={function (
                                        e,
                                        movie: Movie
                                    ): void {
                                        throw new Error(
                                            "Function not implemented."
                                        );
                                    }}
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </div>
                </>
            )}

            {role === "Movie Member" && (
                <>
                    <div className="list1-label">Movie Member List</div>
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
                                    onDelete={handleDelete}
                                    role={role}
                                    onDragStart={function (
                                        e,
                                        movie: Movie
                                    ): void {
                                        throw new Error(
                                            "Function not implemented."
                                        );
                                    }}
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

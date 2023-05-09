import React, { useState } from "react";
// import { RoleSelect } from "./MenuBar";
import { Movie, MovieItem } from "./MovieMaster";
import { Form } from "react-bootstrap";

interface DragListsProps {
    role: string;
    options: string[];
    setOptions: (newOptions: string[]) => void;
}

export function DragLists({ role, options, setOptions }: DragListsProps) {
    const [superMovies, setSuperMovies] = useState<Movie[]>([]);
    const [adminMovies, setAdminMovies] = useState<Movie[]>([]);
    const [userMovies, setUserMovies] = useState<Movie[]>([]);
    const [newUser, setNewUser] = useState<string>("");

    function updateNewUser(event: React.ChangeEvent<HTMLInputElement>) {
        setNewUser(event.target.value);
    }

    function updateOptions(newUser: string) {
        if (!options.includes(newUser)) {
            setOptions([...options, newUser]);
        }
    }

    // function handleOnDrag(e: React.DragEvent, movie: Movie) {
    //     e.dataTransfer.setData("movie", JSON.stringify(movie));
    // }

    function handleOnDropSuper(e: React.DragEvent) {
        const movie = JSON.parse(e.dataTransfer.getData("movie")) as Movie;
        console.log("movie", movie);
        if (!superMovies.includes(movie)) {
            setSuperMovies([...superMovies, movie]);
            if (!adminMovies.includes(movie)) {
                setAdminMovies([...adminMovies, movie]);
            }
        }
    }

    function handleOnDropAdmin(e: React.DragEvent) {
        const movie = JSON.parse(e.dataTransfer.getData("movie")) as Movie;
        console.log("movie", movie);
        if (!adminMovies.includes(movie)) {
            setAdminMovies([...adminMovies, movie]);
        }
    }

    function handleOnDropUser(e: React.DragEvent) {
        const movie = JSON.parse(e.dataTransfer.getData("movie")) as Movie;
        console.log("movie", movie);
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

    return (
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
                            <div key={index} className="dropped-movie">
                                <MovieItem
                                    key={movie.id}
                                    movie={movie}
                                    onSave={handleSuperOnSave}
                                />
                            </div>
                        ))}
                    </div>

                    <h3>Add Users</h3>
                    <div>
                        <Form.Group controlId="formUser">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control
                                value={newUser}
                                onChange={updateNewUser}
                                onKeyPress={(event) => {
                                    if (event.key === "Enter") {
                                        updateOptions(newUser);
                                    }
                                    console.log(options);
                                }}
                            />
                        </Form.Group>
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
    );
}

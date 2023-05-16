/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import { Movie, MovieItem } from "./MovieMaster";
import { ManageUser } from "./ManageUser";
import { Form } from "react-bootstrap";

export interface DragListsProps {
    role: string;
    options: string[];
    setOptions: (newOptions: string[]) => void;
    adminMovies: Movie[];
    setAdminMovies: (movies: Movie[]) => void;
    userMovies: Movie[];
    setUserMovies: (movies: Movie[]) => void;
    onDelete: (movieToDelete: Movie) => void;
    handleAdminOnSave: (movie: Movie) => void;
    handleUserOnSave: (movie: Movie) => void;
    movieCounts: { [user: string]: number }; // Add movieCounts property
    setMovieCounts: (counts: { [user: string]: number }) => void; // Add setMovieCounts property
}

export function DragLists({
    role,
    options,
    setOptions,
    adminMovies,
    setAdminMovies,
    userMovies,
    setUserMovies,
    onDelete,
    handleAdminOnSave,
    handleUserOnSave
}: DragListsProps) {
    const [newUser, setNewUser] = useState<string>("");
    const [members, setMembers] = useState<string[]>([
        ...options.slice(2, options.length)
    ]);
    const [movieCounts, setMovieCounts] = useState<{ [user: string]: number }>(
        {}
    );

    // movie count
    function updateMovieCount(user: string, count: number) {
        setMovieCounts((prevCounts) => ({
            ...prevCounts,
            [user]: count
        }));
    }

    //adds ability for new users to have their own lists
    function updateNewUser(event: React.ChangeEvent<HTMLInputElement>) {
        setNewUser(event.target.value);
    }

    //updates user options when new user is added
    function updateOptions(newUser: string) {
        if (!options.includes(newUser) && newUser !== "") {
            setOptions([...options, newUser]);
            setMembers([...members, newUser]);
            updateMovieCount(newUser, 0);
        }
    }

    //unused in file but still necessary (somehow) for drag to work correctly
    function handleOnDrag(e: React.DragEvent, movie: Movie) {
        e.dataTransfer.setData("movie", JSON.stringify(movie)); //added this not sure if its right yet
    } //try adding this to allmovieslist.tsx

    //prevents duplicates from being added to admin list: each movie has their own unique ID to keep track of
    function checkDuplicates(movie1: Movie, movie2: Movie) {
        return movie1.id == movie2.id;
    }

    //when admin adds movie to list, adds if there is not already a duplicate
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

    //adds movie to user list when user drags a movie in
    function handleOnDropUser(e: React.DragEvent) {
        const movie = JSON.parse(e.dataTransfer.getData("movie")) as Movie;
        setUserMovies([...userMovies, movie]);
        const user = role;
        const count = movieCounts[user] || 0;
        updateMovieCount(user, count + 1);
    }

    //aids in drag ability functioning correctly
    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    //remove
    function removeOption(exUser: string) {
        setOptions(
            options.filter((currUser: string): boolean => currUser !== exUser)
        );
        setMembers(
            members.filter((currUser: string): boolean => currUser !== exUser)
        );
        updateMovieCount(exUser, 0);
    }

    /*function handleUserOnSave(movie: Movie) {
        setUserMovies((prevMovies) =>
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
        setAdminMovies(adminMovies.filter((m) => m.id !== movie.id));
        setUserMovies(userMovies.filter((m) => m.id !== movie.id));
    }
    */

    return (
        <div className="content-lists">
            {role === "Movie Master" && (
                <>
                    <div>
                        <h4>Add Users</h4>
                        <p>
                            type new username then press enter <br></br> click
                            user tags for delete option
                        </p>
                        <Form.Group controlId="formUser">
                            <Form.Label>
                                <h6>New User:</h6>
                            </Form.Label>
                            <Form.Control
                                value={newUser}
                                onChange={updateNewUser}
                                onKeyPress={(event) => {
                                    if (event.key === "Enter") {
                                        updateOptions(newUser);
                                    }
                                }}
                            />
                        </Form.Group>
                        <span className="plaques">
                            {options.map((user, index) => (
                                <span key={index}>
                                    {" "}
                                    <ManageUser
                                        user={user}
                                        options={options}
                                        setOptions={setOptions}
                                        members={members}
                                        setMembers={setMembers}
                                        movieCount={movieCounts[user] || 0}
                                        setMovieCount={(count: number) =>
                                            updateMovieCount(user, count)
                                        }
                                    />
                                </span>
                            ))}
                        </span>
                    </div>
                </>
            )}

            {role === "Movie Mentor" && (
                <>
                    <div className="list1-label">{`${role}`} List</div>
                    <div
                        className="lists"
                        onDrop={handleOnDropAdmin}
                        onDragOver={handleDragOver}
                    >
                        {adminMovies.map((movie, index) => (
                            <div key={index} className="dropped-movie">
                                <MovieItem
                                    movie={movie}
                                    key={movie.id}
                                    onSave={handleAdminOnSave}
                                    onDelete={onDelete}
                                    role={role}
                                />
                            </div>
                        ))}
                    </div>
                </>
            )}
            {role !== "Movie Master" && role !== "Movie Mentor" && (
                <>
                    {members.map((member) => (
                        <>
                            {member === role && (
                                <>
                                    <div className="list1-label">
                                        {`${member}`} List
                                    </div>
                                    <div
                                        className="lists"
                                        onDrop={handleOnDropUser}
                                        onDragOver={handleDragOver}
                                    >
                                        {userMovies.map((movie, index) => (
                                            <div
                                                key={index}
                                                className="dropped-movie"
                                            >
                                                <MovieItem
                                                    movie={movie}
                                                    key={movie.id}
                                                    onSave={handleUserOnSave}
                                                    onDelete={onDelete}
                                                    role={"User Editor"}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </>
                    ))}
                </>
            )}
        </div>
    );
}

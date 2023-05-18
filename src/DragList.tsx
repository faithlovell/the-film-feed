/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import { Movie, MovieItem } from "./MovieMaster";
import { ManageUser } from "./ManageUser";
import { Form } from "react-bootstrap";
import "./App.css";
import "./AllMoviesList.css";

export interface DragListsProps {
    role: string;
    options: string[];
    setOptions: (newOptions: string[]) => void;
    adminMovies: Movie[];
    setAdminMovies: (movies: Movie[]) => void;
    userMovies: { [key: string]: Movie[] }; // Updated type to use object with user-specific movie lists
    setUserMovies: (movies: { [key: string]: Movie[] }) => void; // Updated type to use object with user-specific movie lists
    onDelete: (movieToDelete: Movie) => void;
    handleAdminOnSave: (movie: Movie) => void;
    user: string;
    handleUserOnSave: (movie: Movie, user: string) => void;
    movieCounts: { [user: string]: number }; // Add movieCounts property
    setMovieCounts: (counts: { [user: string]: number }) => void; // Add setMovieCounts property
    countMovieOccurrences: (movieId: number) => number;
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
    user,
    countMovieOccurrences
}: DragListsProps) {
    const [newUser, setNewUser] = useState<string>("");
    const [members, setMembers] = useState<string[]>([
        ...options.slice(2, options.length)
    ]);
    const [actorFilter, setActorFilter] = useState<string>("");

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
    function handleUserOnSave(movie: Movie, user: string) {
        const updatedUserMovies = { ...userMovies };
        updatedUserMovies[user] = updatedUserMovies[user].map((prevMovie) =>
            prevMovie.id === movie.id ? { ...movie } : prevMovie
        );
        setUserMovies(updatedUserMovies);
    }

    //updates user options when new user is added
    function updateOptions(newUser: string) {
        if (!options.includes(newUser) && newUser !== "") {
            setOptions([...options, newUser]);
            setMembers([...members, newUser]);
            setUserMovies({
                ...userMovies,
                [newUser]: []
            });
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
    function filterMoviesByActor(movies: Movie[], actor: string): Movie[] {
        return movies.filter((movie) => movie.cast.includes(actor));
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
    function handleOnDropUser(e: React.DragEvent, user: string) {
        const movie = JSON.parse(e.dataTransfer.getData("movie")) as Movie;
        setUserMovies({
            ...userMovies,
            [user]: [...userMovies[user], movie] // Add the movie to the specific user's movie list
        });
        // const user = role; // Remove this line, as `user` is already defined as a parameter
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
                                className="actor-filter"
                                placeholder="Add User..."
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
                        onDrop={(e) => handleOnDropAdmin(e)}
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
                                    onDragStart={function (
                                        e,
                                        movie: Movie
                                    ): void {
                                        throw new Error(
                                            "Function not implemented."
                                        );
                                    }}
                                    draggable={false}
                                    user={user}
                                    countMovieOccurrences={
                                        countMovieOccurrences
                                    }
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
                                    <input
                                        type="text"
                                        value={actorFilter}
                                        onChange={(e) =>
                                            setActorFilter(e.target.value)
                                        }
                                        placeholder="Filter by actor"
                                        className="actor-filter"
                                    />
                                    <div
                                        className="lists"
                                        onDrop={(e) =>
                                            handleOnDropUser(e, member)
                                        }
                                        onDragOver={handleDragOver}
                                    >
                                        {userMovies[member]?.map(
                                            (movie, index) => (
                                                <div
                                                    key={index}
                                                    className="dropped-movie"
                                                >
                                                    {/* Apply the filterMoviesByActor function before rendering */}
                                                    {actorFilter ? (
                                                        filterMoviesByActor(
                                                            [movie],
                                                            actorFilter
                                                        ).map(
                                                            (filteredMovie) => (
                                                                <MovieItem
                                                                    movie={
                                                                        filteredMovie
                                                                    }
                                                                    key={
                                                                        filteredMovie.id
                                                                    }
                                                                    onSave={
                                                                        handleUserOnSave
                                                                    }
                                                                    draggable={
                                                                        false
                                                                    }
                                                                    onDragStart={(
                                                                        e
                                                                    ) => {
                                                                        throw new Error(
                                                                            "Function not implemented."
                                                                        );
                                                                    }}
                                                                    onDelete={(
                                                                        movieToDelete
                                                                    ) => {
                                                                        throw new Error(
                                                                            "Function not implemented."
                                                                        );
                                                                    }}
                                                                    role={
                                                                        "User Editor"
                                                                    }
                                                                    user={user}
                                                                    countMovieOccurrences={
                                                                        countMovieOccurrences
                                                                    }
                                                                />
                                                            )
                                                        )
                                                    ) : (
                                                        <MovieItem
                                                            movie={movie}
                                                            key={movie.id}
                                                            onSave={
                                                                handleUserOnSave
                                                            }
                                                            draggable={false}
                                                            onDragStart={(
                                                                e
                                                            ) => {
                                                                throw new Error(
                                                                    "Function not implemented."
                                                                );
                                                            }}
                                                            onDelete={(
                                                                movieToDelete
                                                            ) => {
                                                                throw new Error(
                                                                    "Function not implemented."
                                                                );
                                                            }}
                                                            role={"User Editor"}
                                                            user={user}
                                                            countMovieOccurrences={
                                                                countMovieOccurrences
                                                            }
                                                        />
                                                    )}
                                                </div>
                                            )
                                        )}
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

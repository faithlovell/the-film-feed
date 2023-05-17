/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "../App.css";
import { RoleSelect } from "../MenuBar";
import logo from "../assets/ff-logo-white.png";
import { DragLists } from "../DragList";
import "../styles.css";
import "../Scroller.css";
import SliderParent from "../Scroller";
import "../App.css";
import ReviewApp from "../ReviewBox";
import { AllMoviesList } from "../AllMoviesList";
import { Movie } from "../MovieMaster";
import MovieForm from "../NewMovieForm";
import { INITIAL_MOVIES } from "../Movies";
import MovieSearchBar from "../MovieSearchBar";
import SearchMovies from "../MoviesSearch";

function App(): JSX.Element {
    const [role, setRole] = useState<string>("Movie Master");
    const [options, setOptions] = useState<string[]>([
        "Movie Master",
        "Movie Mentor"
    ]);
    const [adminMovies, setAdminMovies] = useState<Movie[]>([]);
    const [userMovies, setUserMovies] = useState<{ [key: string]: Movie[] }>(
        {}
    );
    const [movies, setMovies] = useState<Movie[]>([...INITIAL_MOVIES]);

    //counts how many times a movie appears in the user lists
    const countMovieOccurrence = (movieId: number): number => {
        let count = 0;
        Object.values(userMovies).forEach((movies) => {
            movies.forEach((movie) => {
                if (movie.id === movieId) {
                    count++;
                }
            });
        });
        return count;
    };

    //when any change to a movie list or movie is made, all the movie lists are saved with the edits.
    function handleSave(movie: Movie) {
        setMovies((prevMovies) =>
            prevMovies.map((prevMovie) =>
                prevMovie.id === movie.id ? { ...movie } : prevMovie
            )
        );
        setUserMovies((prevMovies) => {
            const updatedUserMovies = { ...prevMovies };
            for (const role in updatedUserMovies) {
                updatedUserMovies[role] = updatedUserMovies[role].map(
                    (prevMovie) =>
                        prevMovie.id === movie.id ? { ...movie } : prevMovie
                );
            }
            return updatedUserMovies;
        });
        setAdminMovies((prevMovies) =>
            prevMovies.map((prevMovie) =>
                prevMovie.id === movie.id ? { ...movie } : prevMovie
            )
        );
    }

    // when a movie is added to the movies list by super, this function will update the movies list with the new addition
    const addMovie = (newMovie: Movie) => {
        setMovies((prevMovies) => [...prevMovies, newMovie]);
    };

    // when a movie is deleted from the movies list, this function will update all movie lists to remove it
    function deleteMovie(movieToDelete: Movie) {
        setMovies((prevMovies) =>
            prevMovies.filter((movie) => movie.id !== movieToDelete.id)
        );

        setAdminMovies((prevAdminMovies) =>
            prevAdminMovies.filter((movie) => movie.id !== movieToDelete.id)
        );

        setUserMovies((prevUserMovies) => {
            const updatedUserMovies = { ...prevUserMovies };
            for (const role in updatedUserMovies) {
                updatedUserMovies[role] = updatedUserMovies[role].filter(
                    (movie) => movie.id !== movieToDelete.id
                );
            }
            return updatedUserMovies;
        });
    }

    function handleUserOnSave(movie: Movie) {
        setUserMovies((prevUserMovies) => {
            const updatedUserMovies = { ...prevUserMovies };
            for (const role in updatedUserMovies) {
                updatedUserMovies[role] = updatedUserMovies[role].map(
                    (prevMovie) =>
                        prevMovie.id === movie.id ? { ...movie } : prevMovie
                );
            }
            return updatedUserMovies;
        });
    }

    function handleAdminOnSave(movie: Movie) {
        setAdminMovies((prevAdminMovies) =>
            prevAdminMovies.map((prevMovie) =>
                prevMovie.id === movie.id ? { ...movie } : prevMovie
            )
        );
    }

    const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
    const handleSearchMovies = (filteredMovies: Movie[]) => {
        setFilteredMovies(filteredMovies);
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <img
                        style={{ width: 280, height: 241 }}
                        src={logo}
                        alt="logo"
                    />
                    <div>
                        <RoleSelect
                            options={options}
                            role={role}
                            setRole={setRole}
                        ></RoleSelect>
                    </div>
                </div>
            </header>
            <DragLists
                role={role}
                options={options}
                setOptions={setOptions}
                onDelete={deleteMovie}
                userMovies={userMovies}
                adminMovies={adminMovies}
                setUserMovies={setUserMovies}
                setAdminMovies={setAdminMovies}
                handleAdminOnSave={handleAdminOnSave}
                handleUserOnSave={handleUserOnSave}
                user={role}
                movieCounts={{}}
                setMovieCounts={function (): void {
                    throw new Error("Function not implemented.");
                }}
                countMovieOccurrences={countMovieOccurrence}
                userMovieLists={{}}
            ></DragLists>
            <MovieSearchBar movies={movies} userMovies={userMovies} />
            <SearchMovies
                movies={movies}
                onSearch={handleSearchMovies}
            ></SearchMovies>
            <hr></hr>
            <AllMoviesList
                movies={filteredMovies}
                onSave={handleSave}
                onDelete={deleteMovie}
                role={role}
                draggable={true}
                onDragStart={function (): void {
                    throw new Error("Function not implemented.");
                }}
                user={role}
                countMovieOccurrences={countMovieOccurrence}
            ></AllMoviesList>
            <SliderParent movies={movies}></SliderParent>
            <MovieForm
                addMovie={addMovie}
                movies={movies}
                role={role}
            ></MovieForm>
            <ReviewApp></ReviewApp>
            <hr></hr>
            <p>
                Created by: Katie Oates, Diya Shah, John Henry Cooper, Faith
                Lovell, Joy Mwaria.
            </p>
        </div>
    );
}

export default App;

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

function App(): JSX.Element {
    const [role, setRole] = useState<string>("Movie Master");
    const [options, setOptions] = useState<string[]>([
        "Movie Master",
        "Movie Mentor",
        "Movie Member"
    ]);
    const [adminMovies, setAdminMovies] = useState<Movie[]>([]);
    const [userMovies, setUserMovies] = useState<Movie[]>([]);
    const [movies, setMovies] = useState<Movie[]>([...INITIAL_MOVIES]);

    //when any change to a movie list or movie is made, all of the movie lists are saved with the edits.
    function handleSave(movie: Movie) {
        setMovies((prevMovies) =>
            prevMovies.map((prevMovie) =>
                prevMovie.id === movie.id ? { ...movie } : prevMovie
            )
        );
        setUserMovies((prevMovies) =>
            prevMovies.map((prevMovie) =>
                prevMovie.id === movie.id ? { ...movie } : prevMovie
            )
        );
        setAdminMovies((prevMovies) =>
            prevMovies.map((prevMovie) =>
                prevMovie.id === movie.id ? { ...movie } : prevMovie
            )
        );
    }

    //when a movie is added to the movies list by super, this function will update the movies list with the new addition
    const addMovie = (newMovie: Movie) => {
        setMovies((prevMovies) => [...prevMovies, newMovie]);
    };

    //when a movie is deleted from the movies list, this function will update all movie lists to remove it
    function deleteMovie(movieToDelete: Movie) {
        const updatedMovies = movies.filter(
            (movie) => movie.id !== movieToDelete.id
        );
        setMovies(updatedMovies);

        const updatedAdminMovies = adminMovies.filter(
            (movie) => movie.id !== movieToDelete.id
        );
        setAdminMovies(updatedAdminMovies);

        const updatedUserMovies = userMovies.filter(
            (movie) => movie.id !== movieToDelete.id
        );

        setUserMovies(updatedUserMovies);
    }

    //when the user lists are updated, this function handles saving their personal lists
    function handleUserOnSave(movie: Movie) {
        setUserMovies((prevMovies) =>
            prevMovies.map((prevMovie) =>
                prevMovie.id === movie.id ? { ...movie } : prevMovie
            )
        );
    }

    //when the admin list is updated, this function handles saving their personal list
    function handleAdminOnSave(movie: Movie) {
        setAdminMovies((prevMovies) =>
            prevMovies.map((prevMovie) =>
                prevMovie.id === movie.id ? { ...movie } : prevMovie
            )
        );
    }

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
                        {" "}
                        <RoleSelect
                            options={options}
                            role={role}
                            setRole={setRole}
                        ></RoleSelect>{" "}
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
            ></DragLists>

            <hr></hr>
            <AllMoviesList
                movies={movies}
                onSave={handleSave}
                onDelete={deleteMovie}
                role={role}
                draggable={true}
                onDragStart={function (): void {
                    throw new Error("Function not implemented.");
                }}
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

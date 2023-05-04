import React, { useState } from "react";
import "../App.css";
import { MovieItem, Movie } from "../MovieMaster";
import { RoleSelect } from "../MenuBar";
import logo from "../assets/ff-logo.png";
import HarryPotter1 from "../Movies_images/HarryPotter1.png";
import HungerGames from "../Movies_images/Hunger_Games.png";
import Aladdin from "../Movies_images/Aladdin.png";
import Avatar from "../Movies_images/Avatar.png";
import Avengers from "../Movies_images/Avengers.png";
import { DragLists } from "../DragList";
import "../styles.css";
import "../Scroller.css";
import SliderParent from "../Scroller";
import "../App.css";
import ReviewApp from "../ReviewBox";
import { AllMoviesList } from "../AllMoviesList";

function App(): JSX.Element {
    const [role, setRole] = useState<string>("Movie Master");
    const [movies, setMovies] = useState<Movie[]>([
        {
            id: 1,
            title: "Harry Potter and the Philosopher's Stone",
            cast: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
            rating: "PG",
            inTheaters: true,
            image: HarryPotter1
        },
        {
            id: 2,
            title: "Knives Out",
            cast: [
                "Daniel Craig",
                "Chris Evans",
                "Ana de Armas",
                "Jamie Lee Curtis"
            ],
            rating: "PG-13",
            inTheaters: false,
            image: "KnivesOut"
        },
        {
            id: 3,
            title: "Avatar",
            cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
            rating: "PG-13",
            inTheaters: true,
            image: Avatar
        },
        {
            id: 4,
            title: "Avengers: Endgame",
            cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
            rating: "PG-13",
            inTheaters: false,
            image: Avengers
        },
        {
            id: 5,
            title: "The Hunger Games",
            cast: ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth"],
            rating: "PG-13",
            inTheaters: true,
            image: HungerGames
        },
        {
            id: 6,
            title: "Aladdin",
            cast: ["Will Smith", "Mena Massoud", "Naomi Scott"],
            rating: "PG",
            inTheaters: false,
            image: Aladdin
        },
        {
            id: 7,
            title: "The Godfather",
            cast: ["Marlon Brando", "Al Pacino", "James Caan"],
            rating: "R",
            inTheaters: false,
            image: "godfather"
        },
        {
            id: 8,
            title: "Jurassic Park",
            cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
            rating: "PG-13",
            inTheaters: true,
            image: "jurassicpark"
        },
        {
            id: 9,
            title: "The Matrix",
            cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
            rating: "R",
            inTheaters: false,
            image: "matrix"
        },
        {
            id: 10,
            title: "Forrest Gump",
            cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
            rating: "PG-13",
            inTheaters: false,
            image: "forrestgump"
        },
        {
            id: 11,
            title: "Inception",
            cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
            rating: "PG-13",
            inTheaters: false,
            image: "inception"
        },
        {
            id: 12,
            title: "Star Wars: Episode IV - A New Hope",
            cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
            rating: "PG",
            inTheaters: false,
            image: "starwars"
        }
    ]);

    function handleSave(movie: Movie) {
        setMovies((prevMovies) =>
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
                            options={[
                                "Movie Master",
                                "Movie Mentor",
                                "Movie Member"
                            ]}
                            role={role}
                            setRole={setRole}
                        ></RoleSelect>{" "}
                    </div>
                </div>
            </header>
            <DragLists role={role}></DragLists>

            <ReviewApp></ReviewApp>
            <SliderParent movies={movies}></SliderParent>
            <hr></hr>
            <AllMoviesList
                movies={movies}
                onSave={handleSave}
                role={role}
            ></AllMoviesList>
            <hr></hr>
            <p>
                Movies List:
                <div>
                    <h1>Movie List</h1>
                </div>
            </p>
            <p>
                Katie Oates, Diya Shah, John Henry Cooper, Faith Lovell, Joy
                Mwaria
            </p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;

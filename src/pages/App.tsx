import React, { useState } from "react";
import "../App.css";
import { MovieItem, Movie } from "../MovieMaster";
import { RoleSelect } from "../MenuBar";
import logo from "../assets/ff-logo.png";
import { DragLists } from "../DragList";
import "../styles.css";
import "../Scroller.css";
import SliderParent from "../Scroller";
import "../App.css";
import ReviewApp from "../ReviewBox";
import { AllMoviesList } from "../AllMoviesList";
//movies
import HarryPotter1 from "../Movies_images/HarryPotter1.png";
import HungerGames from "../Movies_images/Hunger_Games.png";
import Aladdin from "../Movies_images/Aladdin.png";
import Avatar from "../Movies_images/Avatar.png";
import Avengers from "../Movies_images/Avengers.png";
import KnivesOut from "../Movies_images/KnivesOut.png";
import TheGodfather from "../Movies_images/TheGodfather.jpg";
import JurassicPark from "../Movies_images/JurassicPark.jpeg";
import Matrix from "../Movies_images/Matrix.jpg";
import ForrestGump from "../Movies_images/ForrestGump.jpeg";
import Inception from "../Movies_images/Inception.jpeg";
import StarWarsIV from "../Movies_images/StarWarsIV.png";
import BeautyBeast from "../Movies_images/BeautyAndTheBeast.png";
import Cinderella from "../Movies_images/Cinderella.png";
import Divergent from "../Movies_images/Divergent.png";
import Dumbo from "../Movies_images/Dumbo.png";
import frozen from "../Movies_images/frozen.png";
import Maleficent from "../Movies_images/Maleficent.png";
import PeterPan from "../Movies_images/PeterPan.png";
import Pinocchio from "../Movies_images/Pinocchio.png";
import Pocahontas from "../Movies_images/Pocahontas.png";
import PrincessFrog from "../Movies_images/PrincessAndTheFrog.png";
import ShutterIsland from "../Movies_images/ShutterIsland.png";
import SnowWhite from "../Movies_images/SnowWhite.png";
import Tangled from "../Movies_images/Tangled.png";
import TheLionKing from "../Movies_images/TheLionKing.png";
import TheLittleMermaid from "../Movies_images/TheLittleMermaid.png";
//new movies
import Cars from "../Movies_images/cars.png";
import Incredibles from "../Movies_images/Incredibles.png";
import ToyStory from "../Movies_images/toyStory.png";

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
            image: KnivesOut
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
            image: TheGodfather
        },
        {
            id: 8,
            title: "Jurassic Park",
            cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
            rating: "PG-13",
            inTheaters: true,
            image: JurassicPark
        },
        {
            id: 9,
            title: "The Matrix",
            cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
            rating: "R",
            inTheaters: false,
            image: Matrix
        },
        {
            id: 10,
            title: "Forrest Gump",
            cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
            rating: "PG-13",
            inTheaters: false,
            image: ForrestGump
        },
        {
            id: 11,
            title: "Inception",
            cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
            rating: "PG-13",
            inTheaters: false,
            image: Inception
        },
        {
            id: 12,
            title: "Star Wars: Episode IV - A New Hope",
            cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
            rating: "PG",
            inTheaters: false,
            image: StarWarsIV
        },
        {
            id: 13,
            title: "Beauty and the Beast",
            cast: ["Emma Watson", "Dan Stevens", "Luke Evans"],
            rating: "PG",
            inTheaters: false,
            image: BeautyBeast
        },
        {
            id: 14,
            title: "Cinderella",
            cast: ["Lily James", "Richard Madden", "Cate Blanchett"],
            rating: "PG",
            inTheaters: false,
            image: Cinderella
        },
        {
            id: 15,
            title: "Divergent",
            cast: ["Shailene Woodley", "Theo James", "Miles Teller"],
            rating: "PG-13",
            inTheaters: false,
            image: Divergent
        },
        {
            id: 16,
            title: "Dumbo",
            cast: ["Michael Keaton", "Danny DeVito", "Colin Farrell"],
            rating: "PG",
            inTheaters: false,
            image: Dumbo
        },
        {
            id: 17,
            title: "Frozen",
            cast: ["Kristen Bell", "Idina Menzel", "Josh Gad"],
            rating: "PG",
            inTheaters: false,
            image: frozen
        },
        {
            id: 18,
            title: "Maleficent",
            cast: ["Angelina Jolie", "Elle Fanning", "Vivienne Jolie-Pitt"],
            rating: "PG",
            inTheaters: false,
            image: Maleficent
        },
        {
            id: 19,
            title: "Peter Pan",
            cast: ["Alexander Molony", "Ever Gabo Anderson", "Yara Shahidi"],
            rating: "PG",
            inTheaters: false,
            image: PeterPan
        },
        {
            id: 20,
            title: "Pinocchio",
            cast: ["Tom Hanks", "Cynthia Erivo", "Luke Evans"],
            rating: "PG",
            inTheaters: false,
            image: Pinocchio
        },
        {
            id: 21,
            title: "Princess and the Frog",
            cast: ["John Musker", "Anika Noni Rose", "Bruno Campos"],
            rating: "G",
            inTheaters: false,
            image: PrincessFrog
        },
        {
            id: 22,
            title: "Pocahontas",
            cast: ["Mel Gibson", "Irene Bedard", "Christian Bale"],
            rating: "G",
            inTheaters: false,
            image: Pocahontas
        },
        {
            id: 23,
            title: "Shutter Island",
            cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"],
            rating: "R",
            inTheaters: false,
            image: ShutterIsland
        },
        {
            id: 24,
            title: "Snow White",
            cast: ["Adriana Caselotti", "Harry Stockwell", "Lucille La Verne"],
            rating: "G",
            inTheaters: false,
            image: SnowWhite
        },
        {
            id: 25,
            title: "Tangled",
            cast: ["Mandy Moore", "Zachary Levi", "Donna Murphy"],
            rating: "PG",
            inTheaters: false,
            image: Tangled
        },
        {
            id: 26,
            title: "The Lion King",
            cast: ["Donald Glover", "Seth Rogen", "Chiwetel Ejiofor"],
            rating: "PG",
            inTheaters: false,
            image: TheLionKing
        },
        {
            id: 27,
            title: "The Little Mermaid",
            cast: ["Halle Bailey", "Jodi Benson", "Samuel E. Wright"],
            rating: "G",
            inTheaters: false,
            image: TheLittleMermaid
        },
        {
            id: 28,
            title: "Cars",
            cast: ["Owen Wilson", "Paul Newman", "Bonnie Hunt"],
            rating: "G",
            inTheaters: false,
            image: Cars
        },
        {
            id: 29,
            title: "The Incredibles",
            cast: ["Brad Bird", "Holly Hunder", "Craig T. Nelson"],
            rating: "PG",
            inTheaters: false,
            image: Incredibles
        },
        {
            id: 30,
            title: "Toy Story",
            cast: ["Tom Hanks", "Laurie Metcalf", "Donald Reginoux"],
            rating: "G",
            inTheaters: false,
            image: ToyStory
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

import React, { useState } from "react";
import "../App.css";
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
import Cars from "../Movies_images/cars.png";
import Incredibles from "../Movies_images/Incredibles.png";
import ToyStory from "../Movies_images/toyStory.png";
import { Movie } from "../MovieMaster";
import MovieForm from "../NewMovieForm";

function App(): JSX.Element {
    const [role, setRole] = useState<string>("Movie Master");

    const [movies, setMovies] = useState<Movie[]>([
        {
            id: 1,
            title: "Harry Potter and the Philosopher's Stone",
            description:
                "A young orphan boy learns he is a wizard and enrolls in a magical school where he makes friends and discovers dark secrets about his past.",
            cast: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
            rating: "PG",
            audienceRating: 0,
            inTheaters: true,
            image: HarryPotter1
        },
        {
            id: 2,
            title: "Knives Out",
            description:
                "A wealthy patriarch dies and his family members become suspects in his murder. A famous detective is called in to solve the case.",
            cast: [
                "Daniel Craig",
                "Chris Evans",
                "Ana de Armas",
                "Jamie Lee Curtis"
            ],
            rating: "PG-13",
            audienceRating: 0,
            inTheaters: false,
            image: KnivesOut
        },
        {
            id: 3,
            title: "Avatar",
            description:
                "In a futuristic world, humans are trying to exploit a planet's resources. The natives of the planet, the Na'vi, resist the humans' efforts and a disabled ex-marine is recruited to help bridge the gap between the two sides.",
            cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
            rating: "PG-13",
            audienceRating: 0,
            inTheaters: true,
            image: Avatar
        },
        {
            id: 4,
            title: "Avengers: Endgame",
            description:
                "The Avengers must reunite to defeat the supervillain Thanos who has wiped out half the universe's population.",
            cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
            rating: "PG-13",
            audienceRating: 0,
            inTheaters: false,
            image: Avengers
        },
        {
            id: 5,
            title: "The Hunger Games",
            description:
                "In a dystopian future, teenagers are chosen to compete in a televised fight to the death as a reminder of the government's power",
            cast: ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth"],
            rating: "PG-13",
            audienceRating: 0,
            inTheaters: true,
            image: HungerGames
        },
        {
            id: 6,
            title: "Aladdin",
            description:
                "A street urchin in a mythical city falls in love with a princess and finds a magical lamp with a genie who helps him win her heart.",
            cast: ["Will Smith", "Mena Massoud", "Naomi Scott"],
            rating: "PG",
            audienceRating: 0,
            inTheaters: false,
            image: Aladdin
        },
        {
            id: 7,
            title: "The Godfather",
            description:
                "A crime family patriarch tries to pass his empire onto his son, who is reluctant to take on the family business.",
            cast: ["Marlon Brando", "Al Pacino", "James Caan"],
            rating: "R",
            audienceRating: 0,
            inTheaters: false,
            image: TheGodfather
        },
        {
            id: 8,
            title: "Jurassic Park",
            description:
                "A billionaire invites a group of scientists to visit his island theme park where cloned dinosaurs roam free. Chaos ensues when the dinosaurs escape their enclosures.",
            cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
            rating: "PG-13",
            audienceRating: 0,
            inTheaters: true,
            image: JurassicPark
        },
        {
            id: 9,
            title: "The Matrix",
            description:
                "A hacker discovers that his reality is a simulation created by machines who have enslaved humanity. He joins a rebellion against the machines.",
            cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
            rating: "R",
            audienceRating: 0,
            inTheaters: false,
            image: Matrix
        },
        {
            id: 10,
            title: "Forrest Gump",
            description:
                "A simple man with a low IQ accidentally becomes involved in several defining moments in American history and inspires those around him.",
            cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
            rating: "PG-13",
            audienceRating: 0,
            inTheaters: false,
            image: ForrestGump
        },
        {
            id: 11,
            title: "Inception",
            description:
                "A thief who steals corporate secrets by infiltrating people's dreams is hired to perform the opposite task: to implant an idea into a target's subconscious.",
            cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
            rating: "PG-13",
            audienceRating: 0,
            inTheaters: false,
            image: Inception
        },
        {
            id: 12,
            title: "Star Wars: Episode IV - A New Hope",
            description:
                "A farm boy joins a rebellion against an evil empire with the help of a wise old Jedi and a rogue smuggler.",
            cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
            rating: "PG",
            audienceRating: 0,
            inTheaters: false,
            image: StarWarsIV
        },
        {
            id: 13,
            title: "Beauty and the Beast",
            description:
                "A young woman agrees to live with a beast in exchange for her father's freedom, and over time, comes to love the kind-hearted creature.",
            cast: ["Emma Watson", "Dan Stevens", "Luke Evans"],
            rating: "PG",
            audienceRating: 0,
            inTheaters: false,
            image: BeautyBeast
        },
        {
            id: 14,
            title: "Cinderella",
            description:
                "A young girl, mistreated by her stepmother and stepsisters, gets a chance to attend a royal ball with the help of a fairy godmother.",
            cast: ["Lily James", "Richard Madden", "Cate Blanchett"],
            rating: "PG",
            audienceRating: 0,
            inTheaters: false,
            image: Cinderella
        },
        {
            id: 15,
            title: "Divergent",
            description:
                "In a dystopian future, society is divided into factions based on personality traits. A girl discovers she doesn't fit neatly into any one faction and must navigate the dangerous consequences.",
            cast: ["Shailene Woodley", "Theo James", "Miles Teller"],
            rating: "PG-13",
            audienceRating: 0,
            inTheaters: false,
            image: Divergent
        },
        {
            id: 16,
            title: "Dumbo",
            description:
                "A young elephant with big ears learns to fly and becomes the star attraction in a struggling circus.",
            cast: ["Michael Keaton", "Danny DeVito", "Colin Farrell"],
            rating: "PG",
            audienceRating: 0,
            inTheaters: false,
            image: Dumbo
        },
        {
            id: 17,
            title: "Frozen",
            description:
                "Two sisters, one of whom has magical powers that cause an eternal winter, must work together to save their kingdom.",
            cast: ["Kristen Bell", "Idina Menzel", "Josh Gad"],
            rating: "PG",
            audienceRating: 0,
            inTheaters: false,
            image: frozen
        },
        {
            id: 18,
            title: "Maleficent",
            description:
                "A retelling of the classic Sleeping Beauty story from the perspective of the villainous Maleficent, who is actually a misunderstood and complex character.",
            cast: ["Angelina Jolie", "Elle Fanning", "Vivienne Jolie-Pitt"],
            rating: "PG",
            audienceRating: 0,
            inTheaters: false,
            image: Maleficent
        },
        {
            id: 19,
            title: "Peter Pan",
            description:
                "Based on the classic novel by J.M. Barrie, this is a fantasy adventure film about a boy named Peter Pan who takes three siblings on a magical journey to Neverland, where they encounter pirates, fairies, and mermaids.",
            cast: ["Alexander Molony", "Ever Gabo Anderson", "Yara Shahidi"],
            rating: "PG",
            audienceRating: 0,
            inTheaters: false,
            image: PeterPan
        },
        {
            id: 20,
            title: "Pinocchio",
            description:
                "A live-action remake of the classic Disney animated movie, this film follows the story of a wooden puppet named Pinocchio who comes to life and goes on a quest to become a real boy, while encountering many dangers and obstacles along the way.",
            cast: ["Tom Hanks", "Cynthia Erivo", "Luke Evans"],
            rating: "PG",
            audienceRating: 0,
            inTheaters: false,
            image: Pinocchio
        },
        {
            id: 21,
            title: "Princess and the Frog",
            description:
                "A musical animated film set in New Orleans, this is a retelling of the classic fairy tale about a princess who falls in love with a prince who has been turned into a frog. They go on a journey to break the spell and find true love.",
            cast: ["John Musker", "Anika Noni Rose", "Bruno Campos"],
            rating: "G",
            audienceRating: 0,
            inTheaters: false,
            image: PrincessFrog
        },
        {
            id: 22,
            title: "Pocahontas",
            description:
                "An animated musical film based on the historical figure, this movie tells the story of Pocahontas, a Native American woman who falls in love with an English explorer named John Smith during the colonization of Virginia. The film explores themes of cultural conflict, love, and the environment.",
            cast: ["Mel Gibson", "Irene Bedard", "Christian Bale"],
            rating: "G",
            audienceRating: 0,
            inTheaters: false,
            image: Pocahontas
        },
        {
            id: 23,
            title: "Shutter Island",
            description:
                "A psychological thriller film set in 1954, this movie follows two US Marshals who investigate the disappearance of a patient from a mental hospital on a remote island. As they uncover more secrets about the facility, they begin to question their own sanity.",
            cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"],
            rating: "R",
            audienceRating: 0,
            inTheaters: false,
            image: ShutterIsland
        },
        {
            id: 24,
            title: "Snow White",
            description:
                "The first animated feature film by Walt Disney, this classic movie tells the story of a young princess who is forced to flee into the forest to escape her evil stepmother's jealousy. With the help of seven dwarfs, she learns to live on her own and finds true love with a prince.",
            cast: ["Adriana Caselotti", "Harry Stockwell", "Lucille La Verne"],
            rating: "G",
            audienceRating: 0,
            inTheaters: false,
            image: SnowWhite
        },
        {
            id: 25,
            title: "Tangled",
            description:
                "A musical animated film loosely based on the fairy tale Rapunzel, this movie tells the story of a young woman with magical hair who has been locked away in a tower by an evil witch. She eventually escapes with the help of a thief named Flynn Rider and embarks on a journey to discover the truth about her past.",
            cast: ["Mandy Moore", "Zachary Levi", "Donna Murphy"],
            rating: "PG",
            audienceRating: 0,
            inTheaters: false,
            image: Tangled
        },
        {
            id: 26,
            title: "The Lion King",
            description:
                "An animated musical film set in the African savannah, this movie follows the journey of a young lion named Simba who must come to terms with his responsibilities as king after his father is killed by his uncle Scar.",
            cast: ["Donald Glover", "Seth Rogen", "Chiwetel Ejiofor"],
            rating: "PG",
            audienceRating: 0,
            inTheaters: false,
            image: TheLionKing
        },
        {
            id: 27,
            title: "The Little Mermaid",
            description:
                "An animated musical film based on the fairy tale by Hans Christian Andersen, this movie follows the story of a young mermaid named Ariel who falls in love with a human prince and makes a deal with a sea witch to become human so she can be with him.",
            cast: ["Halle Bailey", "Jodi Benson", "Samuel E. Wright"],
            rating: "G",
            audienceRating: 0,
            inTheaters: false,
            image: TheLittleMermaid
        },
        {
            id: 28,
            title: "Cars",
            description:
                " An animated film about a world populated by anthropomorphic cars, this movie follows the story of a hotshot race car named Lightning McQueen who gets lost on the way to a big race and learns important lessons about friendship and teamwork.",
            cast: ["Owen Wilson", "Paul Newman", "Bonnie Hunt"],
            rating: "G",
            audienceRating: 0,
            inTheaters: false,
            image: Cars
        },
        {
            id: 29,
            title: "The Incredibles",
            description:
                "An animated superhero film about a family of superheroes who have to save the world from a villain named Syndrome, this movie explores themes of family, heroism, and personal growth.",
            cast: ["Brad Bird", "Holly Hunder", "Craig T. Nelson"],
            rating: "PG",
            audienceRating: 0,
            inTheaters: false,
            image: Incredibles
        },
        {
            id: 30,
            title: "Toy Story",
            description:
                "The first animated feature film entirely created with computer-generated imagery (CGI), this movie follows the adventures of a group of toys who come to life when their owner, a young boy named Andy, is not around. The film explores themes of friendship, loyalty, and the value of play.",
            cast: ["Tom Hanks", "Laurie Metcalf", "Donald Reginoux"],
            rating: "G",
            audienceRating: 0,
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

    const addMovie = (newMovie: Movie) => {
        setMovies((prevMovies) => [...prevMovies, newMovie]);
    };

    function deleteMovie(movieToDelete: Movie) {
        // Create a new array that excludes the movie to be deleted
        const updatedMovies = movies.filter(
            (movie) => movie.id !== movieToDelete.id
        );

        // Update the movies state with the new array
        setMovies(updatedMovies);
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
                Lovell, Joy Mwaria
            </p>
        </div>
    );
}

export default App;

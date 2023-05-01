import React, { useState } from "react";
import "../App.css";
import MovieList, {MovieItem} from "../MovieMaster";
import { RoleSelect } from "../MenuBar";
import logo from "../assets/ff-logo.png";
import HarryPotter1 from "../Movies_images/HarryPotter1.png";
import HungerGames from "../Movies_images/Hunger_Games.png";
import Aladdin from "../Movies_images/Aladdin.png";
import Avatar from "../Movies_images/Avatar.png";
import Avengers from "../Movies_images/Avengers.png";
import { DragLists } from "../DragList";
import "../styles.css";
import "../Scroller.css"
import SliderParent from "../Scroller.jsx"

function App(): JSX.Element {
    const [role, setRole] = useState<string>("Movie Master");
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
            <MovieMaster></MovieMaster>
            <hr></hr>
            <SliderParent></SliderParent>
            <p>
                Movies List:
                <div>
                    <h1>Movie List</h1>
                    <MovieList movies={movies} />
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

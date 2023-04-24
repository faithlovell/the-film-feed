import React from "react";
import "./App.css";
import { MovieMaster } from "./MovieMaster";
import { RoleSelect } from "./MenuBar";
import logo from "./assets/ff-logo.png";
import HarryPotter1 from "./Movies_images/HarryPotter1.png";
import HungerGames from "./Movies_images/Hunger_Games.png";
import Aladdin from "./Movies_images/Aladdin.png";
import Avatar from "./Movies_images/Avatar.png";
import Avengers from "./Movies_images/Avengers.png";
import { DragLists } from "./DragList";
import "./styles.css";
import { Stack } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="logo" />
                <div>
                    {" "}
                    <RoleSelect
                        options={[
                            "Movie Master",
                            "Movie Mentor",
                            "Movie Member"
                        ]}
                    ></RoleSelect>{" "}
                </div>
            </header>
            <DragLists></DragLists>

            <hr></hr>
            <MovieMaster></MovieMaster>
            <hr></hr>
            <p>
                Movies List:
                <li>
                    <a href="http://google.com">
                        <img
                            src={HarryPotter1}
                            alt="Harry Potter"
                            className="photo"
                        ></img>
                    </a>
                </li>
                <li>
                    <a href="http://google.com">
                        <img
                            src={HungerGames}
                            alt="The Hunger Games"
                            className="photo"
                        ></img>
                    </a>
                </li>
                <li>
                    <a href="http://google.com">
                        <img
                            src={Aladdin}
                            alt="Aladdin"
                            className="photo"
                        ></img>
                    </a>
                </li>
                <li>
                    <a href="http://google.com">
                        <img src={Avatar} alt="Avatar" className="photo"></img>
                    </a>
                </li>
                <li>
                    <a href="http://google.com">
                        <img
                            src={Avengers}
                            alt="Avengers"
                            className="photo"
                        ></img>
                    </a>
                </li>
            </p>
            <p>Your List: *user list here*</p>
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

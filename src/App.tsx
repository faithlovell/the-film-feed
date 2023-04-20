import React from "react";
import "./App.css";
import { RoleSelect } from "./MenuBar";
import logo from "./assets/ff-logo.png";
import HungerGames from "./Movies_images.jpg";

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
            <p>Movies List: *movies list (super list) here*</p>
            <p>Your List: *user list here*</p>
            <p>
                Katie Oates, Diya Shah, John Henry Cooper, Faith Lovell, Joy
                Mwaria
            </p>
            <li>
                <a href="http://google.com">
                    <img src="HungerGames" alt="The Hunger Games"></img>
                </a>
            </li>
        </div>
    );
}

export default App;

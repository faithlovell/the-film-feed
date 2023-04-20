import React from "react";
import "./App.css";
import { MultipleChoiceQuestion } from "./MenuBar";
import logo from "./assets/ff-logo.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="logo" />{" "}
            </header>
            <p>Select Role: *selection here*</p>
            <p>Movies List: *movies list (super list) here*</p>
            <p>Your List: *user list here*</p>
            <p>
                Katie Oates, Diya Shah, John Henry Cooper, Faith Lovell, Joy
                Mwaria
            </p>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["Movie Master", "Movie Mentor", "Movie Member"]}
            ></MultipleChoiceQuestion>{" "}
            <hr></hr>
        </div>
    );
}

export default App;

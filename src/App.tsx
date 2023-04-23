import React from "react";
import "./App.css";
import { MovieMaster } from "./MovieMaster";
import { RoleSelect } from "./MenuBar";
import logo from "./assets/ff-logo.png";
import { DragLists } from "./DragList";

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

            <p>Movies List: *movies list (super list) here*</p>
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

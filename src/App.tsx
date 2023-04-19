import React from "react";
import "./App.css";
import { MultipleChoiceQuestion } from "./MenuBar";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Hello Hello
            </header>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["Movie Master", "Movie Mentor", "Movie Member"]}
            ></MultipleChoiceQuestion>{" "}
            <hr></hr>
        </div>
    );
}

export default App;

import React from "react";
import "./App.css";
import HungerGames from "Hunger_Games.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <img
                src={"HungerGames"}
                alt="The Hunger Games"
                width="500"
                height="600"
            />
        </div>
    );
}

export default App;

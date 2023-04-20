import React, { useState } from "react";
//import { Form } from "react-bootstrap";

export function MovieMaster(): JSX.Element {
    const [movie, setMovie] = useState<string>("Your Name");

    function updateMovie() {
        setMovie(movie);
    }

    // This is the View
    return (
        <div>
            <h3>Movie Master List</h3>
        </div>
    );
}

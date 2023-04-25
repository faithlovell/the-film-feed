// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from "react";
import { Form } from "react-bootstrap";
//import { Form } from "react-bootstrap";

export function MovieMaster(): JSX.Element {
    interface Movie {
        title: string;
        cast: string[];
        rating: "G" | "PG" | "R" | "unrated";
        inTheaters: boolean;
    }

    const [movieList, setMovieList] = useState<Movie[]>([]);

    // state is list of movies and set list adds movie to list
    function updateMovie(event: React.ChangeEvent<HTMLInputElement>) {
        setMovieList([
            ...movieList,
            {
                title: event.target.value,
                cast: [],
                rating: "unrated",
                inTheaters: false
            }
        ]);
    }

    return (
        <div>
            <p>*add movies*</p>
            <Form.Group controlId="formEditIntro">
                <>
                    <Form.Control onChange={updateMovie} />
                </>
            </Form.Group>
        </div>
    );
}

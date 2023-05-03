// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from "react";
import { Form } from "react-bootstrap";
//import { Form } from "react-bootstrap";

export function MovieMaster(): JSX.Element {
    interface Movie {
        image: string;
        title: string;
        cast: string[];
        rating: "G" | "PG" | "PG-13" | "R" | "unrated";
        inTheatres: boolean;
    }
    // eslint-disable-next-line no-var
    var Hunger_Games = {
        image: "../Movies_images/Hunger_Games.png",
        title: "Hunger Games",
        cast: [
            "Jennifer Lawrence",
            "Josh Hutcherson",
            "Liam Hemsworth",
            "Donald Sutherland"
        ],
        rating: "PG-13",
        inTheatres: false
    };
    let Harry_Potter = {
        image: "../Movies_images/HarryPotter1.png",
        title: "Harry Potter",
        cast: "",
        rating: "PG",
        inTheatres: false
    };
    let Aladdin = {
        image: "../Movies_images/Aladdin.png",
        title: "Aladdin",
        cast: "",
        rating: "PG",
        inTheatres: false
    };
    let Avatar = {
        image: "../Movies_images/Avatar.png",
        title: "Avatar",
        cast: "",
        rating: "PG",
        inTheatres: false
    };
    let Avengers = {
        image: "../Movies_images/Avengers.png",
        title: "Avengers",
        cast: "",
        rating: "PG",
        inTheatres: false
    };

    const [movieList, setMovieList] = useState<Movie[]>([]);

    // state is list of movies and set list adds movie to list
    function updateMovie(event: React.ChangeEvent<HTMLInputElement>) {
        setMovieList([
            ...movieList,
            {
                image: event.target.value,
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

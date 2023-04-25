// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from "react";
import { Form } from "react-bootstrap";
//import { Form } from "react-bootstrap";
import HarryPotter1 from "../Movies_images/HarryPotter1.png";
import HungerGames from "../Movies_images/Hunger_Games.png";
import Aladdin_pic from "../Movies_images/Aladdin.png";
import Avatar_pic from "../Movies_images/Avatar.png";
import Avengers_pic from "../Movies_images/Avengers.png";

export function MovieMaster(): JSX.Element {
    interface Movie {
        image: string;
        title: string;
        cast: string[];
        rating: "G" | "PG" | "PG-13" | "R" | "unrated";
        inTheaters: boolean;
    }
    // eslint-disable-next-line no-var
    const Hunger_Games = {
        image: HungerGames,
        title: "Hunger Games",
        cast: "",
        rating: "PG-13",
        inTheatres: false
    };
    const Harry_Potter = {
        image: HarryPotter1,
        title: "Harry Potter",
        cast: "",
        rating: "PG",
        inTheatres: false
    };
    const Aladdin = {
        image: Aladdin_pic,
        title: "Aladdin",
        cast: "",
        rating: "PG",
        inTheatres: false
    };
    const Avatar = {
        image: Avatar_pic,
        title: "Avatar",
        cast: "",
        rating: "PG",
        inTheatres: false
    };
    const Avengers = {
        image: Avengers_pic,
        title: "Avengers",
        cast: "",
        rating: "PG",
        inTheatres: false
    };

    const [movieList, setMovieList] = useState<Movie[]>([
        Hunger_Games,
        Harry_Potter,
        Aladdin,
        Avatar,
        Avengers
    ]);

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

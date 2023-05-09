import React from "react";
import { useState } from "react";
import "./MovieForm.css";
import { Movie } from "./MovieMaster";
/*interface Review {
    name: string;
    content: string;
}*/

/*
                <section>
                    <label htmlFor="description">Description: </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </section>
                */

interface MovieFormProps {
    addMovie: (newMovie: Movie) => void;
    movies: Movie[];
}

const MovieForm: React.FC<MovieFormProps> = ({ addMovie, movies }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [cast, setCast] = useState<string[]>([]);
    const [rating, setRating] = useState("");
    const [audienceRating, setAudienceRating] = useState(0);
    const [inTheaters, setInTheaters] = useState(false);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setDescription(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value);
    };

    const handleAudienceRatingChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setAudienceRating(parseInt(event.target.value));
    };

    const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRating(event.target.value);
    };

    const handleCastChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const inputText = event.target.value;
        const newActors = inputText.split(",").map((actor) => actor.trim());
        setCast(newActors);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newId = movies.length + 1;
        const img = new Image();
        img.src = image;
        const newMovie: Movie = {
            id: newId,
            title,
            cast,
            rating,
            audienceRating,
            inTheaters,
            image: img.src
        };
        addMovie(newMovie);
    };

    function handleInTheatersChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setInTheaters(event.target.checked);
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <section>
                    <h1>Add a Movie</h1>
                    <label htmlFor="title">Movie Name: </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleNameChange}
                    />
                </section>
                <section>
                    <label htmlFor="image">Image Link: </label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={handleImageChange}
                    />
                </section>
                <section>
                    <label htmlFor="actors">Actor List: </label>
                    <textarea
                        id="cast"
                        value={cast}
                        onChange={handleCastChange}
                    />
                </section>
                <section>
                    <label htmlFor="rating">Audience Rating: </label>
                    <input
                        type="number"
                        id="audience-rating"
                        value={audienceRating}
                        min="0"
                        max="10"
                        onChange={handleAudienceRatingChange}
                    />
                </section>
                <section>
                    <label htmlFor="rating">Rating: </label>
                    <input
                        id="rating"
                        type="text"
                        value={rating}
                        onChange={handleRatingChange}
                    />
                </section>
                <section>
                    <label htmlFor="theaters">In Theaters? </label>
                    <input
                        id="inTheaters"
                        type="checkbox"
                        checked={inTheaters}
                        onChange={handleInTheatersChange}
                    />
                </section>
                <button type="submit">Add Movie</button>
            </form>
        </section>
    );
};

export default MovieForm;

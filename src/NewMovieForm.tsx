import React from "react";
import { useState } from "react";
import "./MovieForm.css";
import { Movie } from "./MovieMaster";
import "./AllMoviesList.css";

interface MovieFormProps {
    addMovie: (newMovie: Movie) => void;
    movies: Movie[];
    role: string;
}

const MovieForm: React.FC<MovieFormProps> = ({ addMovie, movies, role }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("");
    const [audienceRating, setAudienceRating] = useState(0);
    const [inTheaters, setInTheaters] = useState(false);
    const [newCast, setNewCast] = useState<string>("");

    const handleNewCastChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewCast(event.target.value);
    };

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

    function handleInTheatersChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setInTheaters(event.target.checked);
    }

    //updates movie by saving movie's original ID to replace former copy of the movie with new edits
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newId = movies.length + 1;
        const newActors = newCast.split(",").map((actor) => actor.trim());
        setNewCast("");
        const img = new Image();
        img.src = image;
        const newMovie: Movie = {
            id: newId,
            title,
            description,
            cast: [...newActors],
            rating,
            audienceRating,
            inTheaters,
            image: img.src
        };
        addMovie(newMovie);
    };

    return (
        <>
            {role === "Movie Master" ? (
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
                            <label htmlFor="description">Description: </label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={handleDescriptionChange}
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
                            <input
                                type="text"
                                id="cast"
                                value={newCast}
                                onChange={handleNewCastChange}
                            />
                        </section>
                        <section>
                            <label htmlFor="audience-rating">
                                Audience Rating:{" "}
                            </label>
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
                        <button type="submit" className="submit-button">
                            Add Movie
                        </button>
                    </form>
                </section>
            ) : null}
        </>
    );
};

export default MovieForm;

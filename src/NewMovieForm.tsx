import React from "react";
import { useState } from "react";
import "./MovieForm.css";

/*interface Review {
    name: string;
    content: string;
}*/

function AddMovie() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [actors, setActors] = useState<string[]>([]);
    const [rating, setRating] = useState("");
    const [audienceRating, setAudienceRating] = useState(0);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
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

    const handleActorsChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const inputText = event.target.value;
        const newActors = inputText.split(",").map((actor) => actor.trim());
        setActors(newActors);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <section>
                    <h1>Add a Movie</h1>
                    <label htmlFor="name">Movie Name: </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
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
                    <label htmlFor="image">Image: </label>
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
                        id="actors"
                        value={actors}
                        onChange={handleActorsChange}
                    />
                </section>
                <section>
                    <label htmlFor="rating">Audience Rating: </label>
                    <input
                        type="number"
                        id="audience-rating"
                        value={rating}
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
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default AddMovie;

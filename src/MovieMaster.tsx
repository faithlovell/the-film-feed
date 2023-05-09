import React, { useState } from "react";
import "./App.css"; // import CSS file

export interface Movie {
    id: number;
    title: string;
    description: string;
    cast: string[];
    rating: string;
    audienceRating: number;
    inTheaters: boolean;
    image: string;
}

export interface MovieProps {
    movie: Movie;
    onSave: (movie: Movie) => void;
}

export function MovieItem({ movie, onSave }: MovieProps) {
    const [editing, setEditing] = useState(false);

    function handleImageClick() {
        setEditing(true);
    }
    function handleCancel() {
        setEditing(false);
    }

    return (
        <div>
            {editing ? (
                <MovieEdit
                    movie={movie}
                    onSave={onSave}
                    onCancel={handleCancel}
                />
            ) : (
                <div className="centered">
                    <img
                        className="movie-image"
                        src={movie.image}
                        alt={movie.title}
                        style={{ maxWidth: "200px" }}
                        onClick={handleImageClick}
                    />
                    <h3 className="movie-header">{movie.title}</h3>
                    <p className="movie-rating">{movie.rating}</p>
                </div>
            )}
        </div>
    );
}

// interface MovieListProps {
//     movies: Movie[];
// }

interface MovieEditProps {
    movie: Movie;
    onSave: (movie: Movie) => void;
    onCancel: () => void;
}
export function MovieEdit({ movie, onSave, onCancel }: MovieEditProps) {
    const [title, setTitle] = useState(movie.title);
    const [cast, setCast] = useState(movie.cast.join(", "));
    const [rating, setRating] = useState(movie.rating);
    const [inTheaters, setInTheaters] = useState(movie.inTheaters);
    const [image, setImage] = useState(movie.image);
    const [description, setDescription] = useState(movie.description);
    const [audienceRating, setAudienceRating] = useState(movie.audienceRating);
    // const [editing, setEditing] = useState(false);

    // function handleEditClick() {
    //     setEditing(true);
    // }

    // function handleCancel() {
    //     setEditing(false);
    // }

    function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    function handleDescriptionChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setDescription(event.target.value);
    }

    function handleAudienceRatingChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setAudienceRating(parseInt(event.target.value));
    }

    function handleCastChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCast(event.target.value);
    }

    function handleRatingChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRating(event.target.value);
    }

    function handleInTheatersChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setInTheaters(event.target.checked);
    }

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        setImage(event.target.value);
    }

    function handleSaveClick() {
        onSave({
            ...movie,
            title,
            cast: cast.split(", "),
            rating,
            inTheaters,
            image
        });
        onCancel();
    }
    return (
        <div className="movie-editor">
            <label>
                Title:
                <input type="text" value={title} onChange={handleTitleChange} />
            </label>
            <br />
            <label>
                Description:
                <input
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                />
            </label>
            <br />
            <label>
                Cast:
                <input type="text" value={cast} onChange={handleCastChange} />
            </label>
            <br />
            <label>
                Rating:
                <input
                    type="text"
                    value={rating}
                    onChange={handleRatingChange}
                />
            </label>
            <br />
            <label>
                Audience Rating:
                <input
                    type="number"
                    value={audienceRating}
                    onChange={handleAudienceRatingChange}
                />
            </label>
            <br />
            <label>
                In Theaters:
                <input
                    type="checkbox"
                    checked={inTheaters}
                    onChange={handleInTheatersChange}
                />
            </label>
            <br />
            <label>
                Image URL:
                <input type="text" value={image} onChange={handleImageChange} />
            </label>
            <br />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row"
                }}
            >
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
}

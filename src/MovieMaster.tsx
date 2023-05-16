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
    onSave: (movie: Movie, user: string) => void;
    draggable: boolean; // Add this line
    onDragStart: (e: React.DragEvent<HTMLDivElement>, movie: Movie) => void;
    onDrag?: (e: React.DragEvent<HTMLDivElement>) => void; // add this line
    onDelete: (movieToDelete: Movie) => void;
    role: string;

    user: string;
}

//controls movie display and user interactions with movies (ie editing)
export function MovieItem({ movie, onSave, onDelete, role, user }: MovieProps) {
    const [editing, setEditing] = useState(false);
    const [cast, setCast] = useState(movie.cast.join(", "));
    function handleCastSaveClick() {
        onSave(
            {
                ...movie,
                cast: cast.split(", ")
            },
            user
        );
        handleCancel();
    }
    function handleDeleteClick() {
        onDelete(movie);
    }

    function handleCastChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCast(event.target.value);
    }

    //allows user to edit movie if clicked
    function handleImageClick() {
        setEditing(true);
    }

    //takes user out of movie edit mode
    function handleCancel() {
        setEditing(false);
    }

    //allows users to drag movies to lists
    function handleOnDrag(e: React.DragEvent<HTMLDivElement>, movie: Movie) {
        e.dataTransfer.setData("movie", JSON.stringify(movie));
    }

    return (
        <div
            className="movie"
            draggable
            onDragStart={(e) => handleOnDrag(e, movie)}
        >
            {editing ? (
                role === "Movie Mentor" || role === "Movie Master" ? (
                    <MovieEdit
                        movie={movie}
                        onSave={onSave}
                        onCancel={handleCancel}
                        onDelete={onDelete}
                        user={user}
                    />
                ) : role === "User Editor" ? (
                    <div className="movie-editor">
                        <p className="movie-info">
                            <strong>Title:</strong> {movie.title}
                        </p>

                        <>
                            <label className="labels">
                                Cast:
                                <input
                                    type="text"
                                    value={cast}
                                    onChange={handleCastChange}
                                />
                            </label>
                            <p className="movie-info">
                                <strong>Rating:</strong> {movie.rating}
                            </p>
                            <p className="movie-info">
                                <strong>Description:</strong>{" "}
                                {movie.description}
                            </p>
                            <p className="movie-info">
                                <strong>In Theaters:</strong>{" "}
                                {movie.inTheaters ? "Yes" : "No"}
                            </p>
                        </>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row"
                            }}
                        >
                            <button onClick={handleCastSaveClick}>Save</button>
                            <button onClick={handleCancel}>Cancel</button>
                            <button onClick={handleDeleteClick}>Delete</button>
                        </div>
                    </div>
                ) : (
                    <div className="movie-editor">
                        <p className="movie-info">
                            <strong>Title:</strong> {movie.title}
                        </p>
                        <>
                            <p className="movie-info">
                                <strong>Cast:</strong> {movie.cast.join(", ")}
                            </p>
                            <p className="movie-info">
                                <strong>Rating:</strong> {movie.rating}
                            </p>
                            <p className="movie-info">
                                <strong>Description:</strong>{" "}
                                {movie.description}
                            </p>
                            <p className="movie-info">
                                <strong>In Theaters:</strong>{" "}
                                {movie.inTheaters ? "Yes" : "No"}
                            </p>
                            <button onClick={handleCancel}>Cancel</button>
                        </>
                    </div>
                )
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

interface MovieEditProps {
    movie: Movie;
    onSave: (movie: Movie, user: string) => void;
    onCancel: () => void;
    onDelete: (movieToDelete: Movie) => void;
    user: string;
}

export function MovieEdit({
    movie,
    onSave,
    onCancel,
    onDelete,
    user
}: MovieEditProps) {
    const [title, setTitle] = useState(movie.title);
    const [cast, setCast] = useState(movie.cast.join(", "));
    const [rating, setRating] = useState(movie.rating);
    const [inTheaters, setInTheaters] = useState(movie.inTheaters);
    const [image, setImage] = useState(movie.image);
    const [description, setDescription] = useState(movie.description);
    const [audienceRating, setAudienceRating] = useState(movie.audienceRating);

    /*
    all functions below allow for user to edit fields of the movie. each respective field has its own change function
    when user enters new info, it is updated on save.
    */
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

    function handleDeleteClick() {
        onDelete(movie);
    }

    function handleSaveClick() {
        onSave(
            {
                ...movie,
                title,
                cast: cast.split(", "),
                rating,
                inTheaters,
                image
            },
            user
        );
        onCancel();
    }
    return (
        <div className="movie-editor">
            <label className="labels">
                Title:
                <input type="text" value={title} onChange={handleTitleChange} />
            </label>
            <br />
            <label className="labels">
                Description:
                <input
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                />
            </label>
            <br />
            <label className="labels">
                Cast:
                <input type="text" value={cast} onChange={handleCastChange} />
            </label>
            <br />
            <label className="labels">
                Rating:
                <input
                    type="text"
                    value={rating}
                    onChange={handleRatingChange}
                />
            </label>
            <br />
            <label className="labels">
                Audience Rating:
                <input
                    type="number"
                    value={audienceRating}
                    onChange={handleAudienceRatingChange}
                />
            </label>
            <br />
            <label className="labels">
                In Theaters:
                <input
                    type="checkbox"
                    checked={inTheaters}
                    onChange={handleInTheatersChange}
                />
            </label>
            <br />
            <label className="labels">
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
                <button onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    );
}

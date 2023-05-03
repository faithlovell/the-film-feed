import React, { useState } from "react";
import "./App.css"; // import CSS file

export interface Movie {
    id: number;
    title: string;
    cast: string[];
    rating: string;
    inTheaters: boolean;
    image: string;
}

interface MovieProps {
    movie: Movie;
}

export class MovieItem extends React.Component<MovieProps> {
    render() {
        const { movie } = this.props;
        return (
            <div>
                {" "}
                <img
                    src={movie.image}
                    alt={movie.title}
                    style={{ maxWidth: "200px" }}
                />
                <h3>{movie.title}</h3>
                <p>Rating: {movie.rating}</p>
            </div>
        );
    }
}
interface MovieListProps {
    movies: Movie[];
}
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
    const [editing, setEditing] = useState(false);

    function handleEditClick() {
        setEditing(true);
    }

    function handleSave(movie: Movie) {
        onSave(movie);
        setEditing(false);
    }

    function handleCancel() {
        setEditing(false);
    }

    function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
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
    }

    return (
        <div>
            <label>
                Title:
                <input type="text" value={title} onChange={handleTitleChange} />
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
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
}

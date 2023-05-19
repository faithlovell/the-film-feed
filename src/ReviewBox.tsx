import React from "react";
import { useState } from "react";
import "./ReveiwBox.css";
import { Movie } from "./MovieMaster";

interface Review {
    name: string;
    content: string;
    user: string;
}
interface ReviewProps {
    role: string;

    movies: Movie[];
}

function ReviewApp({ role, movies }: ReviewProps) {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [reviews, setReviews] = useState<Review[]>([]);

    /*
    the below functions allow for a review to be inputted and displayed on the website, for viewers to see
    */
    const handleNameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setName(event.target.value);
    };

    const handleContentChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setContent(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newReview = {
            user: role,
            name,
            content
        };
        setReviews([...reviews, newReview]);
        setName("");
        setContent("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="review-box">
                <div>
                    <h2>Review of a Movie</h2>
                    <label htmlFor="name">Movie Name: </label>
                    <select
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        className="dropdown"
                    >
                        <option value="">Select a movie</option>
                        {movies.map((movie) => (
                            <option key={movie.title} value={movie.title}>
                                {movie.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="content">Review: </label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                    />
                </div>
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
            {reviews.map((review, index) => (
                <div
                    key={index}
                    style={{
                        border: "2px solid orange",
                        display: "inline-block",
                        margin: "10px",
                        backgroundColor: "#353b45;"
                    }}
                >
                    <p>
                        <span className="review-user">{review.user}</span>{" "}
                        <span className="review-text">Reviewing</span>{" "}
                        <span className="review-name">{review.name}:</span>{" "}
                        <span className="review-content">{review.content}</span>
                    </p>
                </div>
            ))}
        </div>
    );
}

export default ReviewApp;

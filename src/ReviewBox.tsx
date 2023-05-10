import React from "react";
import { useState } from "react";

interface Review {
    name: string;
    content: string;
}

function ReviewApp() {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [reviews, setReviews] = useState<Review[]>([]);

    /*
    the below functions allow for a review to be inputted and displayed on the website, for viewers to see
    */
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            name,
            content
        };
        setReviews([...reviews, newReview]);
        setName("");
        setContent("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Movie Name: </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="content">Review: </label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {reviews.map((review, index) => (
                <div
                    key={index}
                    style={{
                        border: "2px solid orange",
                        display: "inline-block",
                        margin: "10px"
                    }}
                >
                    <p>
                        {review.name}: {review.content}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default ReviewApp;

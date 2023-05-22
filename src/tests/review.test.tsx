import React from "react";
import ReviewApp from "../ReviewBox";
import { Movie } from "../MovieMaster";
import { render } from "@testing-library/react";

const movies: Movie[] = [
    // Provide sample movies data
];

describe("ReviewApp", () => {
    test("renders the component without errors", () => {
        const { getByText, getByLabelText } = render(
            <ReviewApp role="user" movies={movies} />
        );

        // Check if the component renders properly
        expect(getByText("Review of a Movie")).toBeInTheDocument();
        expect(getByLabelText("Movie Name:")).toBeInTheDocument();
        expect(getByLabelText("Review:")).toBeInTheDocument();
        expect(getByText("Submit")).toBeInTheDocument();
    });
});

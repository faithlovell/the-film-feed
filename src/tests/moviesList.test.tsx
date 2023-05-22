import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AllMoviesList } from "../AllMoviesList";
import { Movie } from "../MovieMaster";

// Sample test data
const movies = [
    {
        id: 1,
        title: "Movie 1",
        rating: "PG",
        inTheaters: true
    },
    {
        id: 2,
        title: "Movie 2",
        rating: "R",
        inTheaters: false
    }
];

// Mocked functions
const onSaveMock = jest.fn();
const onDeleteMock = jest.fn();
const onDragStartMock = jest.fn();
const countMovieOccurrencesMock = jest.fn();

describe("AllMoviesList", () => {
    beforeEach(() => {
        render(
            <AllMoviesList
                movies={[]}
                onSave={onSaveMock}
                onDelete={onDeleteMock}
                role="user"
                user="John"
                countMovieOccurrences={countMovieOccurrencesMock}
                draggable={false}
                onDragStart={function (
                    e: React.DragEvent<HTMLDivElement>,
                    movie: Movie
                ): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders the movie list correctly", () => {
        // Check if the movie list is rendered
        const movieListElement = screen.getByTestId("movie-list");
        expect(movieListElement).toBeInTheDocument();

        // Check if the correct number of movie items is rendered
        const movieItems = screen.getAllByTestId("movie-item");
        expect(movieItems.length).toBe(movies.length);

        // Check if the movie titles are rendered correctly
        movies.forEach((movie) => {
            const movieTitleElement = screen.getByText(movie.title);
            expect(movieTitleElement).toBeInTheDocument();
        });
    });

    it("calls onSave function when a movie is saved", () => {
        const saveButton = screen.getAllByTestId("save-button")[0];
        fireEvent.click(saveButton);

        expect(onSaveMock).toHaveBeenCalledTimes(1);
        expect(onSaveMock).toHaveBeenCalledWith(movies[0]);
    });

    it("calls onDelete function when a movie is deleted", () => {
        const deleteButton = screen.getAllByTestId("delete-button")[0];
        fireEvent.click(deleteButton);

        expect(onDeleteMock).toHaveBeenCalledTimes(1);
        expect(onDeleteMock).toHaveBeenCalledWith(movies[0]);
    });

    it("calls onDragStart function when a movie is dragged", () => {
        const movieItem = screen.getAllByTestId("movie-item")[0];
        fireEvent.dragStart(movieItem);

        expect(onDragStartMock).toHaveBeenCalledTimes(1);
        expect(onDragStartMock).toHaveBeenCalledWith(
            expect.any(Object),
            movies[0]
        );
    });

    it("filters movies correctly based on the selected filter", () => {
        const filterDropdown = screen.getByRole("combobox");
        fireEvent.change(filterDropdown, { target: { value: "ratingPG" } });

        const movieItems = screen.getAllByTestId("movie-item");

        expect(movieItems.length).toBe(1);
        expect(screen.getByText("Movie 1")).toBeInTheDocument();
    });
});

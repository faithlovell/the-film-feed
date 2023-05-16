/* eslint-disable react/react-in-jsx-scope */
// import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { AllMoviesList } from "../AllMoviesList";

describe("AllMoviesList", () => {
    const movies = [
        {
            id: 1,
            title: "Movie 1",
            cast: ["Actor 1", "Actor 2"],
            rating: "PG",
            audienceRating: 0,
            inTheaters: true,
            image: "movie1.jpg",
            description: "Movie 1 description"
        }
        // Add more movies as needed
    ];

    const onSaveMock = jest.fn();
    const onDeleteMock = jest.fn();

    test("renders AllMoviesList component with movies", () => {
        const { queryAllByText } = render(
            <AllMoviesList
                movies={movies}
                onSave={onSaveMock}
                onDelete={onDeleteMock}
                role="Movie Mentor"
                draggable={false}
            />
        );

        movies.forEach((movie) => {
            const movieTitleElements = queryAllByText(movie.title);
            expect(movieTitleElements.length).toBeGreaterThan(0);
        });
    });

    test("calls onSave function when a movie is saved", () => {
        const { queryByText } = render(
            <AllMoviesList
                movies={movies}
                onSave={onSaveMock}
                onDelete={onDeleteMock}
                role="Movie Mentor"
                draggable={false}
            />
        );

        const saveButton = queryByText("Save");
        if (saveButton) {
            fireEvent.click(saveButton);
            expect(onSaveMock).toHaveBeenCalledTimes(1);
        }
    });

    test("calls onDelete function when a movie is deleted", () => {
        const { queryByText } = render(
            <AllMoviesList
                movies={movies}
                onSave={onSaveMock}
                onDelete={onDeleteMock}
                role="Movie Mentor"
                draggable={false}
            />
        );

        const deleteButton = queryByText("Delete");
        if (deleteButton) {
            fireEvent.click(deleteButton);
            expect(onDeleteMock).toHaveBeenCalledTimes(1);
        }
    });

    test("updates the filter when the dropdown value changes", () => {
        const { getByRole, queryAllByText } = render(
            <AllMoviesList
                movies={movies}
                onSave={onSaveMock}
                onDelete={onDeleteMock}
                role="Movie Mentor"
                draggable={false}
            />
        );

        const filterDropdown = getByRole("combobox");
        fireEvent.change(filterDropdown, { target: { value: "ratingPG" } });

        const filteredMovies = movies.filter((movie) => movie.rating === "PG");
        filteredMovies.forEach((movie) => {
            const movieTitleElements = queryAllByText(
                new RegExp(movie.title, "i")
            );
            expect(movieTitleElements.length).toBeGreaterThan(0);
        });
    });
    test("updates the filter when the dropdown value changes", () => {
        const { getByRole, queryAllByText } = render(
            <AllMoviesList
                movies={movies}
                onSave={onSaveMock}
                onDelete={onDeleteMock}
                role="Movie Mentor"
                draggable={false}
            />
        );

        const filterDropdown = getByRole("combobox");
        fireEvent.change(filterDropdown, { target: { value: "ratingPG" } });

        const filteredMovies = movies.filter((movie) => movie.rating === "PG");
        filteredMovies.forEach((movie) => {
            const movieTitleElements = queryAllByText(
                new RegExp(movie.title, "i")
            );
            expect(movieTitleElements.length).toBeGreaterThan(0);
        });
    });
});

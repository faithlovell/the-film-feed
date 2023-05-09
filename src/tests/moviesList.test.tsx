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
        const { getByText } = render(
            // eslint-disable-next-line react/react-in-jsx-scope
            <AllMoviesList
                movies={movies}
                onSave={onSaveMock}
                onDelete={onDeleteMock}
                role="Movie Mentor"
                draggable={false}
                onDragStart={jest.fn()}
            />
        );

        // Check if the movies are rendered
        movies.forEach((movie) => {
            const movieTitleElement = getByText(movie.title);
            expect(movieTitleElement).toBeInTheDocument();
        });
    });

    test("calls onSave function when a movie is saved", () => {
        const { getAllByText } = render(
            // eslint-disable-next-line react/react-in-jsx-scope
            <AllMoviesList
                movies={movies}
                onSave={onSaveMock}
                onDelete={onDeleteMock}
                role="Movie Mentor"
                draggable={false}
                onDragStart={jest.fn()}
            />
        );

        // Get the save buttons and click one of them
        const saveButton = getAllByText("Save")[0];
        fireEvent.click(saveButton);

        // Check if onSave function is called
        expect(onSaveMock).toHaveBeenCalledTimes(1);
    });

    test("calls onDelete function when a movie is deleted", () => {
        const { getAllByText } = render(
            // eslint-disable-next-line react/react-in-jsx-scope
            <AllMoviesList
                movies={movies}
                onSave={onSaveMock}
                onDelete={onDeleteMock}
                role="Movie Mentor"
                draggable={false}
                onDragStart={jest.fn()}
            />
        );

        // Get the delete buttons and click one of them
        const deleteButton = getAllByText("Delete")[0];
        fireEvent.click(deleteButton);

        // Check if onDelete function is called
        expect(onDeleteMock).toHaveBeenCalledTimes(1);
    });

    test("updates the filter when the dropdown value changes", () => {
        const { getByLabelText } = render(
            // eslint-disable-next-line react/react-in-jsx-scope
            <AllMoviesList
                movies={movies}
                onSave={onSaveMock}
                onDelete={onDeleteMock}
                role="Movie Mentor"
                draggable={false}
                onDragStart={jest.fn()}
            />
        );

        // Get the filter dropdown and change its value
        const filterDropdown = getByLabelText("Filter");
        fireEvent.change(filterDropdown, { target: { value: "ratingPG" } });

        // Check if the filter value is updated
        expect(filterDropdown).toBe("ratingPG");
    });
});

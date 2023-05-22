/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { AllMoviesList } from "../AllMoviesList";
import { Movie } from "../MovieMaster";

test("renders the component without errors", () => {
    const movies: Movie[] = []; // Provide sample movies data
    const onSave = jest.fn();
    const onDelete = jest.fn();
    const role = "user";
    const user = "John";
    const countMovieOccurrences = jest.fn();

    render(
        <AllMoviesList
            movies={movies}
            onSave={onSave}
            onDelete={onDelete}
            role={role}
            user={user}
            countMovieOccurrences={countMovieOccurrences}
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

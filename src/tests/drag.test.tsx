/* eslint-disable react/react-in-jsx-scope */
// import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { DragListsProps } from "../DragList";
import { DragLists } from "../DragList";
// import { handleOnDropSuper } from "../DragList";

describe("DragLists", () => {
    const mockMovies = [
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
    const handleOnDropSuperMock = jest.fn();
    const handleOnDropAdminMock = jest.fn();
    const handleOnDropUserMock = jest.fn();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const props: DragListsProps = {
        role: "Movie Member",
        handleOnDropSuper: handleOnDropSuperMock,
        handleOnDropAdmin: handleOnDropAdminMock,
        handleOnDropUser: handleOnDropUserMock
    };

    test("renders DragLists component with Super List", () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const { getByText } = render(<DragLists role="Movie Master" />);

        const superListLabel = getByText("Super List");
        expect(superListLabel).toBeInTheDocument();
    });

    test("renders DragLists component with Admin List", () => {
        const { getByText } = render(<DragLists role="Movie Mentor" />);

        const adminListLabel = getByText("Admin List");
        expect(adminListLabel).toBeInTheDocument();
    });

    test("renders DragLists component with User List", () => {
        const { getByText } = render(<DragLists role="Movie Member" />);

        const userListLabel = getByText("User List");
        expect(userListLabel).toBeInTheDocument();
    });

    test("calls handleOnDropSuper when a movie is dropped on Super List", () => {
        const handleOnDropSuperMock = jest.fn();
        const { getByTestId } = render(
            <DragLists
                role="Movie Master"
                handleOnDropSuper={handleOnDropSuperMock}
            />
        );

        const superList = getByTestId("super-list");
        fireEvent.drop(superList);

        expect(handleOnDropSuperMock).toHaveBeenCalledTimes(1);
    });

    test("calls handleOnDropAdmin when a movie is dropped on Admin List", () => {
        const handleOnDropAdminMock = jest.fn();
        const { getByTestId } = render(
            <DragLists
                role="Movie Mentor"
                handleOnDropAdmin={handleOnDropAdminMock}
            />
        );

        const adminList = getByTestId("admin-list");
        fireEvent.drop(adminList);

        expect(handleOnDropAdminMock).toHaveBeenCalledTimes(1);
    });

    test("calls handleOnDropUser when a movie is dropped on User List", () => {
        const handleOnDropUserMock = jest.fn();
        const { getByTestId } = render(
            <DragLists
                role="Movie Member"
                handleOnDropUser={handleOnDropUserMock}
            />
        );

        const userList = getByTestId("user-list");
        fireEvent.drop(userList);

        expect(handleOnDropUserMock).toHaveBeenCalledTimes(1);
    });
});

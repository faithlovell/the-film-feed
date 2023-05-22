// import React from "react";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { DragLists } from "../DragList";

// describe("DragLists", () => {
//     it("should add a new user when enter key is pressed", () => {
//         const setOptions = jest.fn();
//         const setMembers = jest.fn();
//         const updateMovieCount = jest.fn();

//         render(
//             <DragLists
//                 role="Movie Master"
//                 options={["User1", "User2"]}
//                 setOptions={setOptions}
//                 adminMovies={[]}
//                 setAdminMovies={jest.fn()}
//                 userMovies={{}}
//                 setUserMovies={jest.fn()}
//                 onDelete={jest.fn()}
//                 handleAdminOnSave={jest.fn()}
//                 handleUserOnSave={jest.fn()}
//                 movieCounts={{}}
//                 setMovieCounts={jest.fn()}
//                 user={""}
//                 userMovieLists={{}}
//                 countMovieOccurrences={function (movieId: number): number {
//                     throw new Error("Function not implemented.");
//                 }}
//             />
//         );

//         const newUserInput = screen.getByLabelText("New User:");
//         userEvent.type(newUserInput, "NewUser{enter}");

//         expect(setOptions).toHaveBeenCalledWith(["User1", "User2", "NewUser"]);
//         expect(setMembers).toHaveBeenCalledWith(["User1", "User2", "NewUser"]);
//         expect(updateMovieCount).toHaveBeenCalledWith("NewUser", 0);
//     });

//     it("should display admin movies when role is Movie Mentor", () => {
//         const adminMovies = [
//             { id: 1, title: "Movie 1" },
//             { id: 2, title: "Movie 2" }
//         ];

//         render(
//             <DragLists
//                 role="Movie Mentor"
//                 options={[]}
//                 setOptions={jest.fn()}
//                 adminMovies={[]}
//                 setAdminMovies={jest.fn()}
//                 userMovies={{}}
//                 setUserMovies={jest.fn()}
//                 onDelete={jest.fn()}
//                 handleAdminOnSave={jest.fn()}
//                 handleUserOnSave={jest.fn()}
//                 movieCounts={{}}
//                 setMovieCounts={jest.fn()}
//                 user={""}
//                 userMovieLists={{}}
//                 countMovieOccurrences={function (movieId: number): number {
//                     throw new Error("Function not implemented.");
//                 }}
//             />
//         );

//         expect(screen.getByText("Movie Mentor List")).toBeInTheDocument();
//         expect(screen.getByText("Movie 1")).toBeInTheDocument();
//         expect(screen.getByText("Movie 2")).toBeInTheDocument();
//     });

//     it("should display user movies when role is not Movie Master or Movie Mentor", () => {
//         const userMovies = [
//             { id: 1, title: "Movie 1" },
//             { id: 2, title: "Movie 2" }
//         ];

//         render(
//             <DragLists
//                 role="User Editor"
//                 options={[]}
//                 setOptions={jest.fn()}
//                 adminMovies={[]}
//                 setAdminMovies={jest.fn()}
//                 userMovies={{}}
//                 setUserMovies={jest.fn()}
//                 onDelete={jest.fn()}
//                 handleAdminOnSave={jest.fn()}
//                 handleUserOnSave={jest.fn()}
//                 movieCounts={{}}
//                 setMovieCounts={jest.fn()}
//                 user={""}
//                 userMovieLists={{}}
//                 countMovieOccurrences={function (movieId: number): number {
//                     throw new Error("Function not implemented.");
//                 }}
//             />
//         );

//         expect(screen.getByText("User Editor List")).toBeInTheDocument();
//         expect(screen.getByText("Movie 1")).toBeInTheDocument();
//         expect(screen.getByText("Movie 2")).toBeInTheDocument();
//     });
// });

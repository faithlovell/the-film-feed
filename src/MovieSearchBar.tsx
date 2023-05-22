import React, { useState } from "react";
import { Movie } from "./MovieMaster";

function MovieSearchBar({
    userMovies
}: {
    movies: Movie[];
    userMovies: Movie[] | { [key: string]: Movie[] };
}) {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const getMatchingUsers = (): string[] => {
        const matchingUsers: string[] = [];

        if (searchTerm) {
            Object.entries(userMovies).forEach(([user, movies]) => {
                movies.forEach((movie: { title: string }) => {
                    if (
                        movie.title
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                    ) {
                        matchingUsers.push(user);
                    }
                });
            });
        }

        return matchingUsers;
    };
    const matchingUsers = getMatchingUsers();

    return (
        <div>
            <input
                type="text"
                placeholder="Search User Lists..."
                value={searchTerm}
                onChange={handleSearch}
                className="actor-filter"
            />
            {matchingUsers.length > 0 ? (
                <ul>
                    {matchingUsers.map((user, index) => (
                        <>
                            <li key={index}>{user}</li>
                            <p>{user}</p>
                        </>
                    ))}
                </ul>
            ) : (
                <p>No matching users found.</p>
            )}
        </div>
    );
}

export default MovieSearchBar;

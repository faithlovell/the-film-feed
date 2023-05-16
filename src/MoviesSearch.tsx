import { Movie } from "./MovieMaster";
import React, { useState } from "react";

interface SearchMoviesProps {
    movies: Movie[];
    onSearch: (filteredMovies: Movie[]) => void;
}

const SearchMovies: React.FC<SearchMoviesProps> = ({ movies, onSearch }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toLowerCase();
        const filteredMovies = movies.filter((movie) =>
            movie.title.toLowerCase().includes(query)
        );
        setSearchQuery(query);
        onSearch(filteredMovies);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={handleSearch}
                className="actor-filter"
            />
        </div>
    );
};

export default SearchMovies;

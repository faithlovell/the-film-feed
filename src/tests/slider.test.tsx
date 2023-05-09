// import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SliderParent from "../Scroller";

describe("SliderParent", () => {
    const movies = [
        { title: "Movie 1", image: "image1.jpg", rating: 4.5 },
        { title: "Movie 2", image: "image2.jpg", rating: 3.8 },
        { title: "Movie 3", image: "image3.jpg", rating: 4.2 }
    ];

    test("renders SliderParent component with movies", () => {
        const { getByText, getAllByAltText } = render(
            // eslint-disable-next-line react/react-in-jsx-scope
            <SliderParent movies={movies} />
        );

        // Check if the movies are rendered
        movies.forEach((movie) => {
            const movieTitleElement = getByText(movie.title);
            expect(movieTitleElement).toBeInTheDocument();

            const movieImageElement = getAllByAltText(movie.title)[0];
            expect(movieImageElement).toBeInTheDocument();
        });
    });

    test("scrolls the slider on next button click", () => {
        const { getByText, container } = render(
            // eslint-disable-next-line react/react-in-jsx-scope
            <SliderParent movies={movies} />
        );

        // Get the next button and click it
        const nextButton = getByText(">");
        fireEvent.click(nextButton);

        // Check if the slider has scrolled
        const sliderWrapper = container.querySelector(".slider-wrapper");
        expect(sliderWrapper?.scrollLeft).toBeGreaterThan(0);
    });

    test("scrolls the slider on previous button click", () => {
        const { getByText, container } = render(
            <SliderParent movies={movies} />
        );

        // Get the previous button and click it
        const prevButton = getByText("<");
        fireEvent.click(prevButton);

        // Check if the slider has scrolled
        const sliderWrapper = container.querySelector(".slider-wrapper");
        expect(sliderWrapper?.scrollLeft).toBeLessThan(0);
    });
});

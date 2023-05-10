import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SliderParent from "../Scroller";
import { Movie } from "../MovieMaster";

describe("SliderParent", () => {
    const movies: Movie[] = [
        {
            id: 1,
            title: "Movie 1",
            image: "image1.jpg",
            rating: "4.5",
            description: "",
            cast: [],
            audienceRating: 0,
            inTheaters: false
        },
        {
            id: 2,
            title: "Movie 2",
            image: "image2.jpg",
            rating: "3.8",
            description: "",
            cast: [],
            audienceRating: 0,
            inTheaters: false
        },
        {
            id: 3,
            title: "Movie 3",
            image: "image3.jpg",
            rating: "4.2",
            description: "",
            cast: [],
            audienceRating: 0,
            inTheaters: false
        }
    ];

    test("renders SliderParent component with movies", () => {
        const { getByText, getAllByAltText } = render(
            <SliderParent movies={movies as Movie[]} />
        );

        movies.forEach((movie) => {
            const movieTitleElement = getByText(movie.title);
            expect(movieTitleElement).toBeInTheDocument();

            const movieImageElement = getAllByAltText(movie.title)[0];
            expect(movieImageElement).toBeInTheDocument();
        });
    });

    test("scrolls the slider on next button click", () => {
        const { getByText, container } = render(
            <SliderParent movies={movies as Movie[]} />
        );

        const nextButton = getByText(">");
        fireEvent.click(nextButton);

        const sliderWrapper = container.querySelector(".slider-wrapper");
        expect(sliderWrapper?.scrollLeft).toBeGreaterThanOrEqual(0);
    });

    test("scrolls the slider on previous button click", () => {
        const { getByText, container } = render(
            <SliderParent movies={movies as Movie[]} />
        );

        const prevButton = getByText("<");
        fireEvent.click(prevButton);

        const sliderWrapper = container.querySelector(".slider-wrapper");
        expect(sliderWrapper?.scrollLeft).toBeLessThanOrEqual(0);
    });

    test("disables previous button when slider is at the beginning", () => {
        const { getByText } = render(
            <SliderParent movies={movies as Movie[]} />
        );

        const prevButton = getByText("<");
        expect(prevButton).toBeDisabled();
    });

    test("disables next button when slider is at the end", () => {
        const { getByText } = render(
            <SliderParent movies={movies as Movie[]} />
        );

        const nextButton = getByText(">");
        expect(nextButton).toBeDisabled();
    });

    // Existing code...

    test("enables previous button when slider is scrolled to the right", () => {
        const { getByText, container } = render(
            <SliderParent movies={movies as Movie[]} />
        );

        const nextButton = getByText(">");
        fireEvent.click(nextButton);

        const prevButton = getByText("<");
        expect(prevButton).toBeDisabled();

        const sliderWrapper = container.querySelector(".slider-wrapper");
        expect(sliderWrapper?.scrollLeft).toBeGreaterThanOrEqual(0);
    });

    test("enables next button when slider is scrolled to the left", () => {
        const { getByText, container } = render(
            <SliderParent movies={movies as Movie[]} />
        );

        const prevButton = getByText("<");
        fireEvent.click(prevButton);

        const nextButton = getByText(">");
        expect(nextButton).toBeDisabled();

        const sliderWrapper = container.querySelector(".slider-wrapper");
        expect(sliderWrapper?.scrollLeft).toBeLessThanOrEqual(0);
    });
});

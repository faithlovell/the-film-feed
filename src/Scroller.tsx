import "./Scroller.css";
import React, { Component, ReactNode } from "react";
import ReactDOM from "react-dom";
import { Movie } from "./MovieMaster";
import HarryPotter1 from "./Movies_images/HarryPotter1.png";
import Aladdin from "./Movies_images/Aladdin.png";

interface SliderProps {
    movies: Movie[];
    children: ReactNode;
}

interface SliderState {
    prevDisable: boolean;
    nextDisable: boolean;
}

class Slider extends Component<SliderProps, SliderState> {
    private sliderRef: HTMLDivElement | null = null;

    constructor(props: SliderProps) {
        super(props);
        this.state = {
            prevDisable: true,
            nextDisable: false
        };
    }

    componentDidMount() {
        this.checkButtons();
    }

    private checkButtons = () => {
        if (this.sliderRef) {
            const { offsetWidth, scrollWidth, scrollLeft } = this.sliderRef;
            this.setState({
                prevDisable: scrollLeft <= 0,
                nextDisable: scrollLeft + offsetWidth >= scrollWidth
            });
        }
    };

    private onPrevClick = () => {
        if (this.sliderRef) {
            const { offsetWidth } = this.sliderRef;
            this.sliderRef.scrollLeft -= offsetWidth / 2;
            this.checkButtons();
        }
    };

    private onNextClick = () => {
        if (this.sliderRef) {
            const { offsetWidth, scrollWidth } = this.sliderRef;
            this.sliderRef.scrollLeft += offsetWidth / 2;
            this.checkButtons();
        }
    };

    public render() {
        return (
            <div
                className="slider-container"
                ref={(el) => (this.sliderRef = el)}
            >
                <div className="slider-wrapper">{this.props.children}</div>
                <button
                    className={`btn prev ${
                        this.state.prevDisable ? "disable" : ""
                    }`}
                    disabled={this.state.prevDisable}
                    onClick={this.onPrevClick}
                    type="button"
                >
                    {"<"}
                </button>
                <button
                    className={`btn next ${
                        this.state.nextDisable ? "disable" : ""
                    }`}
                    disabled={this.state.nextDisable}
                    onClick={this.onNextClick}
                    type="button"
                >
                    {">"}
                </button>
            </div>
        );
    }
}

class SliderParent extends Component {
    public render() {
        const movies: Movie[] = [
            {
                title: "Harry Potter and the Philosopher's Stone",
                cast: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
                rating: "PG",
                inTheaters: false,
                image: HarryPotter1
            },
            {
                title: "Aladdin",
                cast: ["Will Smith", "Mena Massoud", "Naomi Scott"],
                rating: "PG",
                inTheaters: false,
                image: Aladdin
            },
            {
                title: "Movie 1",
                cast: ["Actor 1", "Actor 2"],
                rating: "PG",
                inTheaters: true,
                image: HarryPotter1
            },
            {
                title: "Movie 2",
                cast: ["Actor 3", "Actor 4"],
                rating: "R",
                inTheaters: false,
                image: Aladdin
            },
            {
                title: "Movie 1",
                cast: ["Actor 1", "Actor 2"],
                rating: "PG",
                inTheaters: true,
                image: HarryPotter1
            },
            {
                title: "Movie 2",
                cast: ["Actor 3", "Actor 4"],
                rating: "R",
                inTheaters: false,
                image: Aladdin
            }
            // add more movies here
        ];

        return (
            <div className="parent">
                <Slider movies={movies}>
                    {movies.map((movie) => {
                        return (
                            <div>
                                <img
                                    className="movie-item"
                                    src={movie.image}
                                    alt={movie.title}
                                    style={{ maxWidth: "200px" }}
                                />
                                <h3>{movie.title}</h3>
                                <p>Rating: {movie.rating}</p>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}

ReactDOM.render(<SliderParent />, document.getElementById("root"));

export default SliderParent;

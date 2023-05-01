import './style.css'
import React from 'react';
import ReactDOM from 'react-dom';

class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prevDisable: true,
			nextDisable: this.refs && this.refs.offsetWidth >= this.refs.scrollWidth ? true : false
		};
	}

 componentDidMount() {
  this.checkButtons(this.refs.offsetWidth, this.refs.scrollWidth);
 }
	checkButtons = (offsetWidthValue, scrollWidthValue) => {
		this.setState({
			prevDisable: this.refs.scrollLeft <= 0 ? true : false,
			nextDisable: this.refs.scrollLeft + offsetWidthValue >= scrollWidthValue ? true : false
		});
	};

	render() {
		const offsetWidthValue = this.refs.offsetWidth,
			scrollWidthValue = this.refs.scrollWidth;
		return (
			<div
				className='slider-container'
				ref={el => {
					this.refs = el;
				}}
			>
				<div className='slider-wrapper'>{this.props.children}</div>
				<div
					className={`btn prev ${this.state.prevDisable ? 'disable' : ''}`}
					disabled={this.state.prevDisable}
					onClick={() => {
						this.refs.scrollLeft -= offsetWidthValue / 2;
						this.checkButtons(offsetWidthValue, scrollWidthValue);
					}}
				>
					{'<'}
				</div>
				<div
					className={`btn next ${this.state.nextDisable ? 'disable' : ''}`}
					disabled={this.state.nextDisable}
					onClick={() => {
						this.refs.scrollLeft += offsetWidthValue / 2;
						this.checkButtons(offsetWidthValue, scrollWidthValue);
					}}
				>
					{'>'}
				</div>
			</div>
		);
	}
}

class SliderParent extends React.Component {
	render() {
  let data = [
			'Apple',
			'Ball',
			'Cat',
			'Dog',
			'Elephant',
			'Fruits',
			'Gorilla',
			'Horse',
			'Ink',
			'Jug',
			'Kite',
			'Lemon',
			'Orange',
			'Paddy',
			'Queen',
			'Rose',
			'Street',
			'Tuesday',
			'Umbrella',
			'Vanilla',
			'Wax',
			'Xerox',
			'Yarn',
			'Zebra'
		];
		return (
			<div className='parent'>
				<Slider>
					{data.map(value => {
						return (
							<div key={value} className='child'>
								{value}
							</div>
						);
					})}
				</Slider>
			</div>
		);
	}
}


ReactDOM.render(<SliderParent />, document.getElementById('root'));

export default  SliderParent;

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Counter extends Component {
	componentDidUpdate(prevProps, prevState) {
		console.log("Prev Prop", prevProps);
		console.log("Prev State", prevState);
	}

	componentWillUnmount() {
		console.log("Component - Unmounted!");
	}

	render() {
		console.log("Counter - Rendered!");

		return (
			<div className="row">
				<div className="col-1">
					<span className={this.getBadgeClasses()}>
						{this.formatCount()}
					</span>
				</div>

				<div className="col-4">
					<button
						onClick={() =>
							this.props.onIncrement(this.props.counter)
						}
						className="btn btn-secondary btn-sm mr-2"
					>
						<FontAwesomeIcon icon="plus" />
					</button>

					<button
						onClick={() =>
							this.props.onDecrement(this.props.counter)
						}
						className="btn btn-secondary btn-sm"
						disabled={this.props.counter.value <= 0}
					>
						<FontAwesomeIcon icon="minus" />
					</button>

					<button
						onClick={() => {
							this.props.onDelete(this.props.counter.id);
						}}
						className="btn btn-danger btn-sm m-2"
					>
						<FontAwesomeIcon icon="times" />
					</button>
				</div>
			</div>
		);
	}

	getBadgeClasses() {
		let badgeClasses = "badge m-2 badge-";
		badgeClasses += this.props.counter.value === 0 ? "warning" : "primary";
		return badgeClasses;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;

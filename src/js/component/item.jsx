import React from "react";
import PropTypes from "prop-types";

export const Item = props => {
	return (
		<li>
			{props.name}{" "}
			<button
				onClick={props.onMyClick}
				className="btn btn-secondary btn-lg disabled">
				X
			</button>
		</li>
	);
};

Item.propTypes = {
	name: PropTypes.string,
	onMyClick: PropTypes.any
};

import React from "react";
import PropTypes from "prop-types";

export const Item = props => {
	return (
		<li>
			{props.name}{" "}
			<button onClick={props.onMyClick} className="btn btn-lg">
				<i className="fa fa-trash" aria-hidden="true" />
			</button>
		</li>
	);
};

Item.propTypes = {
	name: PropTypes.string,
	onMyClick: PropTypes.any
};

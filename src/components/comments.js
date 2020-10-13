import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Comments = ({ commentID }) => {
	const [ comment, setComment ] = useState({});
	useEffect(
		() => {
			const getComment = async () => {
				const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?id=${commentID}`);
				setComment(data[0]);
			};

			getComment();
		},
		[ commentID ]
	);
	return (
		<div>
			<p>{comment && comment.name}</p>
			<p>{comment && comment.email}</p>
			<p>{comment && comment.body}</p>
		</div>
	);
};

Comments.propTypes = {};

export default Comments;

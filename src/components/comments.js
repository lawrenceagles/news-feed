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
		<div className='text-white'>
			<p className='py-2'>{comment && comment.name}</p>
			<p className='py-2'>{comment && comment.email}</p>
			<p className='py-2'>{comment && comment.body}</p>
			<h4>Featured Comment</h4>
		</div>
	);
};

Comments.propTypes = {};

export default Comments;

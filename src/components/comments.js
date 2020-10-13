import React from "react";
import PropTypes from "prop-types";
import useFetch from "../effects/useFetch";

const Comments = ({ commentID }) => {
	const URL = `https://jsonplaceholder.typicode.com/comments?id=${commentID}`;
	const comment = useFetch(URL, commentID);
	return (
		<div className='text-white'>
			<p className='py-2'>{comment && comment.name}</p>
			<p className='py-2'>{comment && comment.email}</p>
			<p className='py-2'>{comment && comment.body}</p>
			<h4>Featured Comment</h4>
		</div>
	);
};

Comments.propTypes = {
	commentID : PropTypes.number,
};

export default Comments;

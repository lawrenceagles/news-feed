import React from "react";
import PropTypes from "prop-types";
import useFetch from "../effects/useFetch";

const News = ({ postID }) => {
	const URL = `https://jsonplaceholder.typicode.com/posts/?id=${postID}`;
	const post = useFetch(URL, postID);
	return (
		<div className='text-white'>
			<h3 className='py-2'>{post && post.title}</h3>
			<p className='py-2'>{post && post.body}</p>
			<h4>Featured Post</h4>
		</div>
	);
};

News.propTypes = {
	postId : PropTypes.number,
};

export default News;

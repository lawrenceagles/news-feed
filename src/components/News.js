import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const News = ({ postID }) => {
	const [ post, setPost ] = useState({});
	useEffect(
		() => {
			const getPost = async () => {
				const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/?id=${postID}`);
				setPost(data[0]);
			};

			getPost();
		},
		[ postID ]
	);
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

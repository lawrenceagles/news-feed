import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const News = ({ postID }) => {
	const [ post, setPost ] = useState({});
	useEffect(() => {
		const getPost = async () => {
			const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`);
			setPost(data);
		};

		getPost();
	});
	return (
		<div>
			<h3>{post && post.title}</h3>
			<p>{post && post.body}</p>
		</div>
	);
};

News.propTypes = {
	postId : PropTypes.number,
};

export default News;

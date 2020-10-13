import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useFetch from "../effects/useFetch";

const Users = ({ userID }) => {
	const URL = `https://jsonplaceholder.typicode.com/users?id=${userID}`;
	const user = useFetch(URL, userID);
	return (
		<div className='text-white'>
			<p className='py-2'>{user && user.username}</p>
			<p className='py-2'>{user && user.name}</p>
			<p className='py-2'>{user && user.email}</p>
			<p className='py-2'>{user && user.phone}</p>
			<h4>Featured User</h4>
		</div>
	);
};

Users.propTypes = {
	userID : PropTypes.number,
};

export default Users;

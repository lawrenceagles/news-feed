import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Users = ({ userID }) => {
	const URL = `https://jsonplaceholder.typicode.com/users?id=${userID}`;
	const [ user, setUser ] = useState({});
	useEffect(
		() => {
			const getUser = async () => {
				const { data } = await axios.get(URL);
				setUser(data[0]);
			};

			getUser();
		},
		[ userID ]
	);
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

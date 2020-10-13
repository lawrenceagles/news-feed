import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Users = ({ userID }) => {
	const [ user, setUser ] = useState({});
	useEffect(
		() => {
			const getUser = async () => {
				const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${userID}`);
				setUser(data[0]);
			};

			getUser();
		},
		[ userID ]
	);
	return (
		<div>
			<p>{user && user.username}</p>
			<p>{user && user.name}</p>
			<p>{user && user.email}</p>
			<p>{user && user.phone}</p>
		</div>
	);
};

Users.propTypes = {
	userID : PropTypes.number,
};

export default Users;

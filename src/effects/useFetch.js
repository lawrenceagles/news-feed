import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, dep) => {
	const [ data, setData ] = useState({});

	useEffect(
		() => {
			const fetchData = async () => {
				const { data } = await axios.get(url);
				setData(data[0]);
			};

			fetchData();
		},
		[ dep ]
	);

	return data;
};

export default useFetch;

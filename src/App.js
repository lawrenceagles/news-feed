import "./App.css";
import React from "react";

// components
import News from "./components/News";
import Users from "./components/Users";
import Comments from "./components/comments";

const App = () => {
	return (
		<div className='container-fluid'>
			<div className='row'>
				<h2 className='text-center mx-auto mt-2 mb-4'>News Feed Home</h2>
			</div>
			<div className='row'>
				<div className='bg-primary text-center col-sm-12 col-md-4'>
					<News />
				</div>
				<div className='bg-success text-center col-sm-12 col-md-4'>
					<Users />
				</div>
				<div className='bg-warning text-center col-sm-12 col-md-4'>
					<Comments />
				</div>
			</div>
		</div>
	);
};

export default App;

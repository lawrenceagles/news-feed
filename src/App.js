import "./App.css";
import React from "react";

// components
import News from "./components/News";
import Users from "./components/Users";
import Comments from "./components/comments";

const App = () => {
	return (
		<div className='container vh-100 d-flex flex-column justify-content-center align-items-center'>
			<div className='row'>
				<h1 className='text-center mx-auto mt-2 mb-4'>Featured Feed</h1>
			</div>
			<div className='row'>
				<div class='card bg-primary text-center col-md-12 col-lg-4'>
					<div class='card-body'>
						<News postID={1} />
					</div>
				</div>

				<div class='card bg-success text-center col-md-12 col-lg-4'>
					<div class='card-body'>
						<Users userID={4} />
					</div>
				</div>

				<div class='card bg-danger text-center col-md-12 col-lg-4'>
					<div class='card-body'>
						<Comments commentID={3} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;

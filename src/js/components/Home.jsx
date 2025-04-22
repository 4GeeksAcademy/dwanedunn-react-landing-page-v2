import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import NavBar from "./NavBar";
import Footer from "./Footer";
import Hero from "./Hero";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar/>
			<div className="container">
			<Hero/>
			</div>		
			<div className="text-center">
				
				<h1 className="text-center mt-5">Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working...
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
					love!
				</p>

			</div>
			<Footer/>
		</>
	);
};

export default Home;
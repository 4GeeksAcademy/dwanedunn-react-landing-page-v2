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
			<Card/>
			</div>
			<Footer/>
		</>
	);
};

export default Home;
import React from "react";

//include images into your bundle


import NavBar from "./NavBar";
import Footer from "./Footer";
import Hero from "./Hero";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar/>
			<div className="container">
			<Hero/>
			</div>
			<Card/>
			<Footer/>
		</>
	);
};

export default Home;
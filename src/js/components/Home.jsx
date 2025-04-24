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
			const cards = [{
				title: 'Card Title 1',
				imageSrc: "",
				content: 'lormem10',
				button: 'Click Me',
			},
			{
				title: 'Card Title 2',
				imageSrc: ""
				content: 'lormem10',
				button: 'Click Me',
			},
			{
				title: 'Card Title 3',
				imageSrc: "",
				content: 'lormem10',
				button: 'Click Me',
			},
			{
				title: 'Card Title 4',
				imageSrc: "",
				content: 'lormem10',
				button: 'Click Me',
			},
			{
				title: 'Card Title 5',
				imageSrc: "",
				content: 'lormem10',
				button: 'Click Me',
			}]

			</div>
			<Footer/>
		</>
	);
};

export default Home;
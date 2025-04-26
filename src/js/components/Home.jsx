import React from "react";

//include images into your bundle

import NavBar from "./NavBar";
import Footer from "./Footer";
import Hero from "./Hero";
import Card from "./Card";

//create your first component
const Home = () => {
  const cards = [
    {
      imageURL: "https://placehold.co/500x325",
      imageAlt: "place holder",
      title: "First Title",
      content: "First Content",
    },
    {
      imageURL: "https://placehold.co/500x325",
      imageAlt: "place holder",
      title: "second Title",
      content: "Second Content",
    },
    {
      imageURL: "https://placehold.co/500x325",
      imageAlt: "place holder",
      title: "third Title",
      content: "third Content",
    },
    {
      imageURL: "https://placehold.co/500x325",
      imageAlt: "place holder",
      title: "Fourth Title",
      content: "fourth Content",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="container">
        <Hero />
      </div>
      <div className="d-flex">
        {cards.map((card, index) => (
          <div key={index}>
            <Card
              imageURL={card.imageURL}
              imageAlt={card.imageAlt}
              cardTitle={card.title}
              content={card.content}
            />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Home;

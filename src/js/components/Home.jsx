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
      imageAlt: "place holder imgage",
      title: "Card Title",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta officiis enim repudiandae!",
      btnText: "Find Out More!",
    },
    {
      imageURL: "https://placehold.co/500x325",
      imageAlt: "place holder imgage",
      title: "Card Title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sed sequi tempora?",
      btnText: "Find Out More!",
    },
    {
      imageURL: "https://placehold.co/500x325",
      imageAlt: "place holder imgage",
      title: "Card Title",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis molestiae.",
      btnText: "Find Out More!",
    },
    {
      imageURL: "https://placehold.co/500x325",
      imageAlt: "place holder imgage",
      title: "Card Title",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      btnText: "Find Out More!",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="container">
        <Hero />
      </div>
      <div className="container d-flex gap-4">
        {cards.map((card, index) => (
          <div key={index}>
            <Card
              imageURL={card.imageURL}
              imageAlt={card.imageAlt}
              titleitle={card.title}
              content={card.content}
              btnText={card.btnText}
            />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Home;

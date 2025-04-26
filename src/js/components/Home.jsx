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
      title: "Card Title",
      cardContent:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta officiis enim repudiandae!",
      cardBtnText: "Find Out More!",
    },
    {
      imageURL: "https://placehold.co/500x325",
      imageAlt: "place holder",
      title: "Card Title",
      cardContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sed sequi tempora?",
      cardBtnText: "Find Out More!",
    },
    {
      imageURL: "https://placehold.co/500x325",
      imageAlt: "place holder",
      title: "Card Title",
      cardcontent:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptatibus, reiciendis molestiae reprehenderit minus qui.",
      cardBtnText: "Find Out More!",
    },
    {
      imageURL: "https://placehold.co/500x325",
      imageAlt: "place holder",
      title: "Card Title",
      cardContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae sunt blanditiis maiores tenetur, illo laboriosam dicta eligendi hic illum.",
      cardBtnText: "Find Out More!",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="container">
        <Hero />
      </div>
      <div className="container-fluid d-flex gap-4">
        {cards.map((card, index) => (
          <div className="border border-danger" key={index}>
            <Card
              imageURL={card.imageURL}
              imageAlt={card.imageAlt}
              cardTitle={card.cardTitle}
              cardContent={card.cardcontent}
              cardBtnText={card.cardBtnText}
            />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Home;

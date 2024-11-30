import Slider from "react-slick";
import HeroCard from "./herosCard";
import "./meetHeros.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const heroesData = [
  {
    name: "Alexandra Rice",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    twitterUrl: "#",
    linkedinUrl: "#",
    image: "./Images/Avatar (1).png",
  },
  {
    name: "Albert Flores",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    twitterUrl: "#",
    linkedinUrl: "#",
    image: "./Images/girl2.png",
  },
  {
    name: "Theresa Webb",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    twitterUrl: "#",
    linkedinUrl: "#",
    image: "./Images/girl1.png",
  },
  {
    name: "Marvin McKinney",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    twitterUrl: "#",
    linkedinUrl: "#",
    image: "./Images/girl3.png",
  },
  // Add more heroes if needed
];

const MeetTheHeroes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="meet-the-heroes">
      <h2>Meet the heroes</h2>
      <Slider {...settings} className="hero-cards">
        {heroesData.map((hero, index) => (
          <HeroCard
            key={index}
            name={hero.name}
            position={hero.position}
            description={hero.description}
            twitterUrl={hero.twitterUrl}
            linkedinUrl={hero.linkedinUrl}
            image={hero.image}
          />
        ))}
      </Slider>
    </section>
  );
};

export default MeetTheHeroes;

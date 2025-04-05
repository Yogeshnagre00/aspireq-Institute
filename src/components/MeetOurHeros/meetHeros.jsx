import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import HeroCard from "./herosCard";
import "./meetHeros.css";

const heroesData = [
  {
    name: "Abhijit Pampatwar",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    linkedinUrl: "#",
    image: "./Images/Avatar (1).webp",
  },
  {
    name: "Pankaj Pampatwar",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    linkedinUrl: "https://www.linkedin.com/in/pankajpampatwar/",
    image: "./Images/girl2.webp",
  },
  {
    name: "Mayur Yambal",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    linkedinUrl: "https://www.linkedin.com/in/mayuryambal/",
    image: "./Images/girl1.webp",
  },
  {
    name: "Mahesh Yambal",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    linkedinUrl: "https://www.linkedin.com/in/mahesh-yambal-b18152227/",
    image: "./Images/girl3.webp",
  },
  {
    name: "Baslingappa Songi",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    linkedinUrl: "https://www.linkedin.com/in/baslingappa-sonagi-33520780/",
    image: "./Images/girl3.webp",
  },
  {
    name: "Rajesh Patil",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    linkedinUrl: "#",
    image: "./Images/girl3.webp",
  },
  {
    name: "Parmeshwar Nagre",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    linkedinUrl: "https://www.linkedin.com/in/parmeshwar-nagre-856a4a117/",
    image: "./Images/girl3.webp",
  },
  {
    name: "Saroj Bhosle",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    twitterUrl: "#",
    linkedinUrl: "#",
    image: "./Images/girl3.webp",
  },
  {
    name: "Jagdish Belapure",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    linkedinUrl: "#",
    image: "./Images/girl3.webp",
  },
  {
    name: "Ekta Dhote",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    linkedinUrl: "https://www.linkedin.com/in/ekta-dhote-652760255/",
    image: "./Images/girl3.webp",
  },
  {
    name: "Shivani Dhole",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    linkedinUrl: "https://www.linkedin.com/in/shivani-dhole-027a00200/",
    image: "./Images/girl3.webp",
  },
  // Add more heroes if needed
];

const MeetTheHeroes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

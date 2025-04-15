import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import HeroCard from "./herosCard";
import "./meetHeros.css";

const heroesData = [
  {
    name: "Abhijit Pampatwar",
    position: "Founder & CEO at ASPIREQ",
    linkedinUrl: "https://www.linkedin.com/in/abhijit-pampatwar-90a649206",
    image: "./Images/Abhijit pampatware profile.webp",
  },
  {
    name: "Pankaj Pampatwar",
    position: "Program Manager at Emerson",
    linkedinUrl: "https://www.linkedin.com/in/pankajpampatwar/",
    image: "./Images/pankaj pampatwar profile.webp",
  },
  {
    name: "Mayur Yambal",
    position: "Chief Platform & Delivery Officer at iauro Systems",
    linkedinUrl: "https://www.linkedin.com/in/mayuryambal/",
    image: "./Images/Mayur Yambal profile.webp",
  },
  {
    name: "Mahesh Yambal",
    position: "Senior Test Engineer at Josh",
    linkedinUrl: "https://www.linkedin.com/in/mahesh-yambal-b18152227/",
    image: "./Images/Mahesh Yambal.webp",
  },
  {
    name: "Baslingappa Songi",
    position: "Tecnical Lead at L&T",
    linkedinUrl: "https://www.linkedin.com/in/baslingappa-sonagi-33520780/",
    image: "./Images/Baslingappa Songi.webp",
  },
  {
    name: "Rajesh Patil",
    position: "Performace Test Lead at IDeaS ",
    linkedinUrl: "#",
    image: "./Images/Rajesh Patil Profile.webp",
  },
  {
    name: "Parmeshwar Nagre",
    position: "Software Engineer at Commonwealth Bank Of Australia",
    linkedinUrl: "https://www.linkedin.com/in/parmeshwar-nagre-856a4a117/",
    image: "./Images/Parmeshwar Nagre Profile.webp",
  },
  {
    name: "Saroj Bhosle",
    position: "Application Support Analyst Lead",
    twitterUrl: "#",
    linkedinUrl: "#",
    image: "./Images/girl3.webp",
  },
  {
    name: "Jagdish Belapure",
    position: "Application Support Analyst Lead",
    linkedinUrl: "#",
    image: "./Images/girl3.webp",
  },
  {
    name: "Ekta Dhote",
    position: "QA Automation Engineer at Servian",
    linkedinUrl: "https://www.linkedin.com/in/ekta-dhote-652760255/",
    image: "/Images/ekata profile.jpg",
  },
  {
    name: "Shivani Dhole",
    position: "Associate Lawyer",
    linkedinUrl: "https://www.linkedin.com/in/shivani-dhole-027a00200/",
    image: "./Images/Shivani Dhole Profile.webp",
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
    autoplay: false,
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
      <h2>Meet The Heroes</h2>
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

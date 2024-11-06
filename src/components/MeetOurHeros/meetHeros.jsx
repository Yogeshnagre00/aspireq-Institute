import HeroCard from "./herosCard";
import "./meetHeros.css";

const heroesData = [
  {
    name: "Alexandra Rice",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    twitterUrl: "#",
    linkedinUrl: "#",
    image: "./Images/Avatar.png",
  },
  {
    name: "Albert Flores",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    twitterUrl: "#",
    linkedinUrl: "#",
    image: "./Images/Avatar.png",
  },
  {
    name: "Theresa Webb",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    twitterUrl: "#",
    linkedinUrl: "#",
    image: "./Images/Avatar.png",
  },
  {
    name: "Marvin McKinney",
    position: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    twitterUrl: "#",
    linkedinUrl: "#",
    image: "./Images/Avatar.png",
  },
];

const MeetTheHeroes = () => {
  return (
    <section className="meet-the-heroes">
      <h2>Meet the heroes</h2>
      <div className="hero-cards">
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
      </div>
    </section>
  );
};

export default MeetTheHeroes;

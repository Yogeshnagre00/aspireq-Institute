
import CourseCards from "../../components/Courses/course";
import "./CoursesPage.css";

const courses = [
  {
    image: "./Images/Container.png",
    category: "Development",
    title: "Full Stack Developer",
    lessons: 12,
    duration: "1h 30m",
    students: 20,
    author: "Angela",
    authorImage: "./Images/author.png",
    price: 60,
    rating: 4.5,
  },
  {
    image: "./Images/Container.png",
    category: "Development",
    title: "Business Analyst(BA)",
    lessons: 10,
    duration: "2h 00m",
    students: 15,
    author: "John Doe",
    authorImage: "./Images/author.png",
    price: 45,
    rating: 4,
  },
  {
    image: "./Images/Container.png",
    category: "Development",
    title: "Software Development Engineer in Testing ",
    lessons: 15,
    duration: "2h 30m",
    students: 30,
    author: "Jane Smith",
    authorImage: "./Images/author.png",
    price: 70,
    rating: 4.7,
  },
  {
    image: "./Images/Container.png",
    category: "Development",
    title: "Devops Engineer",
    lessons: 15,
    duration: "2h 30m",
    students: 30,
    author: "Jane Smith",
    authorImage: "./Images/author.png",
    price: 70,
    rating: 3.8,
  },
  {
    image: "./Images/Container.png",
    category: "Development",
    title: "Corporate Training",
    lessons: 15,
    duration: "2h 30m",
    students: 25,
    author: "Jane Smith",
    authorImage: "./Images/author.png",
    price: 70,
    rating: 4.5,
  },
  {
    image: "/./Images/Container.png",
    category: "Development",
    title: "Scrum Master",
    lessons: 15,
    duration: "2h 30m",
    students: 23,
    author: "Jane Smith",
    authorImage: "./Images/author.png",
    price: 70,
    rating: 4.5,
  },
];

const CourseSection = () => {
  return (
    <section className="course-section">
      <h2>Courses</h2>
      <div className="course-section__grid">
        {courses.map((course, index) => (
          <CourseCards key={index} {...course} />
        ))}
      </div>
    </section>
  );
};

export default CourseSection;

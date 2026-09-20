
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import './ReviewSectionCrud.css';
import About from '../../../../components/About/About.jsx';
import { useEffect, useState } from 'react';
import { getItemFromLocalstorage, removeFromLocalstorage, setItemInLocalstorage } from '../../../../utils/localstorage.js';

const DEFAULT_REVIEWS = [
    {
        id: 1,
        title: "SquareUp has been Instrumental in Transforming our Online Presence. ",
        text: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
        image:"/img/homeImg/JohnSmith.png",
        author: "John Smith",
        authorTitle: "CEO of Chic Boutique"
    },
    {
        id: 2,
        title: "Working with SquareUp was a breeze.",
        text: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
        image:"/img/homeImg/SarahJohnson.png",
        author: "Sarah Johnson",
        authorTitle: "Founder of HungryBites."
    },
    {
        id:3,
        title: "SquareUp developed a comprehensive booking and reservation system for our event management company",
        text: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
        image:"/img/homeImg/MarkThompson.png",
        author: "Mark Thompson",
        authorTitle: "CEO of EventMasters"
    },
    {
        id:4,
        title: "ProTech Solutions turned to SquareUp to automate our workflow",
        text: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
        image:"/img/homeImg/LauraAdams.png",
        author: "Laura Adams",
        authorTitle: "COO of ProTech Solutions."
    },
    {
        id:5,
        title: "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
        text: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
        image:"/img/homeImg/MichaelAnderson.png",
        author: "Michael Anderson",
        authorTitle: "Founder of Dream Homes Realty."
    },
    {
        id:6,
        title: "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
        text: "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
        image:"/img/homeImg/EmilyTurner.png",
        author: "Emily Turner",
        authorTitle: "CEO of FitLife Tracker"
    },
];

export default function ReviewSectionCrud() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const saved = getItemFromLocalstorage("reviews");
    if (saved && saved.length > 0) {
      setReviews(saved);
    } else {
      setItemInLocalstorage("reviews", DEFAULT_REVIEWS);
      setReviews(DEFAULT_REVIEWS);
    }
  }, []);

  const handleDeleteReview = (id) => {
    const confirmDelete = window.confirm("Are you sure from delete this Review?");
    if (!confirmDelete) return;
    removeFromLocalstorage("reviews", id);
    setReviews(getItemFromLocalstorage("reviews"));
};

  const handleNavigateToEdit = (item) => {
    navigate(`edit/${item.id}`, { state: { item } });
  };

  return (
    <>
      <Link to="add">
        <Button 
          name="add" width="100%" height="34px" fontSize="18px"
          backgroundColor="var(--green50)" border="1px solid var(--green50)"
          color="var(--grey30)" borderRadius="8px"
        />
      </Link>
      
        <div className="bh-dashboard">
          <About 
            reviews={reviews}
            showActions={true}
            onDelete={handleDeleteReview}
            onEdit={handleNavigateToEdit}
          />

        </div>
    </>
  )
}
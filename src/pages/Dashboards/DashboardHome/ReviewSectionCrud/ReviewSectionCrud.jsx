
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import './ReviewSectionCrud.css';
import About from '../../../../components/About/About.jsx';
import { useEffect, useState } from 'react';
import { getItemFromLocalstorage, removeFromLocalstorage } from '../../../../utils/localstorage.js';
import { MdDelete, MdEdit } from 'react-icons/md';

export default function ReviewSectionCrud() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const data = getItemFromLocalstorage("reviews");
    setReviews(data);
  }, []);

  const handleDeleteReview = (id) => {
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
      <div className="bh-card">
        <div className="about-card">
          <About 
            reviews={reviews}
            showActions={true}
            onDelete={handleDeleteReview}
            onEdit={handleNavigateToEdit}
          />
        
        </div>
      </div>
    </>
  )
}
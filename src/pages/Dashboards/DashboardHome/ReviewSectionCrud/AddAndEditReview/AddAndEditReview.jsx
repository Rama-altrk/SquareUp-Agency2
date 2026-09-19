
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ReviewForm from '../../../../../components/ReviewForm/ReviewForm';
import './AddAndEditReview.css';
import { getItemFromLocalstorage, addToLocalstorage, updateLocalstorage } from "../../../../../utils/localstorage.js";

export default function AddAndEditReview() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const existingReviews = getItemFromLocalstorage("reviews") || [];
  const itemFromState = location.state?.item;
  const itemFromParams = id ? existingReviews.find((item) => String(item.id) === String(id)) : null;
  const editingItem = itemFromState || itemFromParams || null;

  const handleAddReview = (newReview) => {
    addToLocalstorage("reviews", newReview);
    navigate(-1);
  };

  const handleUpdateReview = (updatedFromForm) => {
    updateLocalstorage("reviews", updatedFromForm.id, updatedFromForm);
    navigate(-1);
  };

  return (
    <div>
      {/* <ReviewForm 
        editingItem={editingItem}
        onAddReview={handleAddReview}
        onUpdateReview={handleUpdateReview}
      /> */}
      <ReviewForm />
    </div>
  )
}

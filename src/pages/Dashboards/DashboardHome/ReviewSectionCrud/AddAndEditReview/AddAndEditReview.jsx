
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ReviewForm from '../../../../../components/ReviewForm/ReviewForm';
import './AddAndEditReview.css';
import { getItemFromLocalstorage, addToLocalstorage, updateLocalstorage } from "../../../../../utils/localstorage.js";

export default function AddAndEditReview() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
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
      <ReviewForm />
    </div>
  )
}

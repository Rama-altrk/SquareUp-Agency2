import { useLocation, useNavigate, useParams } from 'react-router-dom';
import FaqForm from '../../../../../components/FaqForm/FaqForm';
import './AddAndEditFaq.css';

const STORAGE_KEY = 'faq_items';

const DEFAULT_FAQ_ITEMS = [
  { id: 1, question: "What services does SquareUp provide?", answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." },
  { id: 2, question: "How can SquareUp help my business?", answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." },
  { id: 3, question: "What industries does SquareUp work with?", answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." },
  { id: 4, question: "How long does it take to complete a project with SquareUp?", answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." },
  { id: 5, question: "Do you offer ongoing support and maintenance after the project is completed?", answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." },
  { id: 6, question: "Can you work with existing design or development frameworks?", answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." },
  { id: 7, question: "How involved will I be in the project development process?", answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." },
  { id: 8, question: "Can you help with website or app maintenance and updates?", answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." }
];

const getNextAvailableId = (items) => {
  const ids = new Set(items.map((item) => Number(item.id)));
  let nextId = 1;
  while (ids.has(nextId)) {
    nextId++;
  }
  return nextId;
};

export default function AddAndEditFaq() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams(); 

  const getStoredFaqs = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_FAQ_ITEMS;
  };

  const existingFaqs = getStoredFaqs();
  const itemFromState = location.state?.item || location.state?.faq;
  const itemFromParams = id ? existingFaqs.find((item) => String(item.id) === String(id)) : null;
  const rawItem = itemFromState || itemFromParams;

  const editingItem = rawItem ? {
    id: rawItem.id,
    question: rawItem.question || '',
    answer: rawItem.answer || ''
  } : null;

  const handleSave = (updatedFromForm) => {
    const existing = getStoredFaqs();
    const updatedList = existing.map((item) =>
      String(item.id) === String(updatedFromForm.id)
        ? { ...item, question: updatedFromForm.question, answer: updatedFromForm.answer }
        : item
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    navigate(-1);
  };

  const handleAdd = (newFromForm) => {
    const existing = getStoredFaqs();
    const nextId = getNextAvailableId(existing);

    const newItem = {
      id: nextId,
      question: newFromForm.question,
      answer: newFromForm.answer
    };

    const updatedList = [...existing, newItem].sort((a, b) => Number(a.id) - Number(b.id));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    navigate(-1);
  };

  return (
    <div className="add-and-edit-faq-container">
      <FaqForm
        editingItem={editingItem}
        onAdd={handleAdd}
        onSave={handleSave}
      />
    </div>
  );
}
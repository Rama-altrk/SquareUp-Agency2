import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import './FaqSectionCrud.css';
import { MdEdit, MdDelete } from "react-icons/md";

const DEFAULT_FAQ_ITEMS = [
  {
    id: 1,
    question: "What services does SquareUp provide?",
    answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
  },
  {
    id: 2,
    question: "How can SquareUp help my business?",
    answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
  },
  {
    id: 3,
    question: "What industries does SquareUp work with?",
    answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
  },
  {
    id: 4,
    question: "How long does it take to complete a project with SquareUp?",
    answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
  },
  {
    id: 5,
    question: "Do you offer ongoing support and maintenance after the project is completed?",
    answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
  },
  {
    id: 6,
    question: "Can you work with existing design or development frameworks?",
    answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
  },
  {
    id: 7,
    question: "How involved will I be in the project development process?",
    answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
  },
  {
    id: 8,
    question: "Can you help with website or app maintenance and updates?",
    answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
  }
];

const STORAGE_KEY = 'faq_items';

export default function FaqSectionCrud() {
  const navigate = useNavigate();

  const [faqs, setFaqs] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== null) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.sort((a, b) => Number(a.id) - Number(b.id));
        }
      }
    } catch (err) {
      console.error('Error reading localStorage', err);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_FAQ_ITEMS));
    return DEFAULT_FAQ_ITEMS;
  });

  const handleDelete = (targetId) => {
    setFaqs((prevFaqs) => {
      const updatedData = prevFaqs.filter((item) => Number(item.id) !== Number(targetId));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleNavigateToEdit = (item) => {
    navigate(`edit/${item.id}`, { state: { item } });
  };

  return (
    <div className="faq-crud-wrapper">
      <Link to="add" className="faq-crud-add-link">
        <Button
          name="add"
          width="100%"
          height="34px"
          fontSize="28px"
          backgroundColor="var(--green50, #9eff00)"
          border="1px solid var(--green50, #9eff00)"
          color="var(--grey30, #191919)"
          borderRadius="8px"
        />
      </Link>

      <div className="faq-crud-list">
        {faqs.length === 0 ? (
          <p className="faq-crud-empty">There are no questions at the moment, you can add a new question</p>
        ) : (
          faqs.map((item) => (
            <div key={item.id} className="faq-crud-card">
              <div className="faq-crud-card-top">
                <span className="faq-crud-num">
                  {String(item.id).padStart(2, '0')}
                </span>
                <h3 className="faq-crud-question">{item.question}</h3>
              </div>

              <div className="faq-crud-card-actions">
                <button
                  type="button"
                  className="faq-crud-btn edit-btn"
                  title="Edit"
                  onClick={() => handleNavigateToEdit(item)}
                >
                  <MdEdit />
                </button>
                <button
                  type="button"
                  className="faq-crud-btn delete-btn"
                  title="Delete"
                  onClick={() => handleDelete(item.id)}
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
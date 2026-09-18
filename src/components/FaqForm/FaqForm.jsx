import { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { COLORS } from '../../assets/constants/colors';
import { FONTS } from '../../assets/constants/fonts';
import './FaqForm.css';

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

export function InputsField({
  className = '',
  widthField = '100%',
  labelField,
  labelId,
  inputType = 'text',
  value = '',
  onChange,
  placeholder = 'Type here',
  isTextarea = false,
  rows = 3
}) {
  return (
    <div className={`rtContainerInput ${className}`} style={{ width: widthField }}>
      <label
        htmlFor={labelId}
        className="rtLabelForm"
        style={{ ...FONTS.medium, color: COLORS.absolutefff }}
      >
        {labelField}
      </label>

      {isTextarea ? (
        <textarea
          id={labelId}
          name={labelId}
          value={value}
          onChange={onChange}
          rows={rows}
          className="rtInputForm rtTextareaForm"
          placeholder={placeholder}
          style={{ ...FONTS.regular, color: COLORS.absolutefff }}
        />
      ) : (
        <input
          type={inputType}
          className="rtInputForm"
          name={labelId}
          id={labelId}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{ ...FONTS.regular, color: COLORS.absolutefff }}
        />
      )}
    </div>
  );
}

export default function FaqForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const stateItem = location.state?.item || location.state?.faq;
  const pathId = params.id || location.pathname.split('/').filter(Boolean).pop();
  const effectiveId = stateItem?.id || (!isNaN(pathId) ? pathId : null);
  const isEditMode = Boolean(effectiveId);

  // دالة مساعدة لجلب البيانات الأولية فوراً قبل أول Render
  const getInitialData = () => {
    if (stateItem) {
      return { question: stateItem.question || '', answer: stateItem.answer || '' };
    }
    if (effectiveId) {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        const list = stored ? JSON.parse(stored) : DEFAULT_FAQ_ITEMS;
        const current = list.find((el) => String(el.id) === String(effectiveId));
        if (current) {
          return { question: current.question || '', answer: current.answer || '' };
        }
      } catch (err) {
        console.error('Error loading data:', err);
      }
    }
    return { question: '', answer: '' };
  };

  const [question, setQuestion] = useState(() => getInitialData().question);
  const [answer, setAnswer] = useState(() => getInitialData().answer);

  const handleSaveData = (e) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) {
      alert('الرجاء تعبئة السؤال والإجابة');
      return;
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const list = stored ? JSON.parse(stored) : DEFAULT_FAQ_ITEMS;

      if (isEditMode) {
        const updated = list.map((item) => {
          if (String(item.id) === String(effectiveId)) {
            return {
              ...item,
              question: question.trim(),
              answer: answer.trim()
            };
          }
          return item;
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } else {
        const newId = getNextAvailableId(list);
        const newItem = {
          id: newId,
          question: question.trim(),
          answer: answer.trim()
        };
        const updated = [...list, newItem].sort((a, b) => Number(a.id) - Number(b.id));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      }

      navigate(-1);
    } catch (err) {
      console.error('Error saving FAQ:', err);
    }
  };

  return (
    <div className="faq-dashboard-container">
      <div className="faq-form-top-bar">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="faq-back-btn"
        >
          ← Back
        </button>
      </div>

      <form className="faq-form-content" onSubmit={handleSaveData}>
        <InputsField
          labelField={isEditMode ? "Edit Question" : "Add Question"}
          labelId="faq_question"
          inputType="text"
          placeholder="Type here"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <InputsField
          labelField={isEditMode ? "Edit Answer" : "Add Answer"}
          labelId="faq_answer"
          placeholder="Type here"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          isTextarea={true}
          rows={4}
        />

        <div className="faq-actions-group">
          <button
            type="submit"
            className={`faq-btn-action ${isEditMode ? 'faq-btn-save' : 'faq-btn-add'}`}
          >
            {isEditMode ? 'Save Changes' : 'Add'}
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="faq-btn-action faq-btn-cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
import { useState, useEffect } from 'react';
import './faq.css';

const STORAGE_KEY = 'faq_items';

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const DEFAULT_FAQ_ITEMS = [
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

const FaqCard = ({ item, isOpen, toggleFAQ }) => {
  return (
    <div
      className={`HM-faq-card ${isOpen ? 'HM-open' : ''}`}
      onClick={() => toggleFAQ(item.id)}
    >
      <span className="HM-faq-number">
        {String(item.id).padStart(2, '0')}
      </span>

      <div className="HM-faq-content">
        <div className="HM-faq-card-header">
          <h3 className="HM-faq-question">
            {item.question}
          </h3>

          <button
            className="HM-faq-icon-btn"
            type="button"
            aria-label="Toggle question"
            onClick={(e) => {
              e.stopPropagation();
              toggleFAQ(item.id);
            }}
          >
            {isOpen ? <CloseIcon /> : <PlusIcon />}
          </button>
        </div>

        {isOpen && item.answer && (
          <div className="HM-faq-answer">
            <p>{item.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Faq = ({ items }) => {
  const parseAndSort = (data) => {
    if (!Array.isArray(data)) return [];
    return [...data].sort((a, b) => Number(a.id) - Number(b.id));
  };

  const getInitialFaqs = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== null) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parseAndSort(parsed);
        }
      }
    } catch (err) {
      console.error('Error reading localStorage in Faq', err);
    }
    return parseAndSort(items && items.length > 0 ? items : DEFAULT_FAQ_ITEMS);
  };

  const [faqList, setFaqList] = useState(getInitialFaqs);
  const [openId, setOpenId] = useState(() => faqList[0]?.id ?? null);

  useEffect(() => {
    const syncFaqs = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored !== null) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setFaqList(parseAndSort(parsed));
            return;
          }
        }
      } catch (err) {
        console.error('Error syncing faqs', err);
      }
      if (items && items.length > 0) {
        setFaqList(parseAndSort(items));
      }
    };

    syncFaqs();

    window.addEventListener('storage', syncFaqs);
    window.addEventListener('focus', syncFaqs);

    return () => {
      window.removeEventListener('storage', syncFaqs);
      window.removeEventListener('focus', syncFaqs);
    };
  }, [items]);

  const toggleFAQ = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const midPoint = Math.ceil(faqList.length / 2);
  const leftItems = faqList.slice(0, midPoint);
  const rightItems = faqList.slice(midPoint);

  return (
    <section className="HM-faq-section">
      <div className="HM-faq-grid">
        <div className="HM-faq-column">
          {leftItems.map((item) => (
            <FaqCard
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>

        <div className="HM-faq-column">
          {rightItems.map((item) => (
            <FaqCard
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
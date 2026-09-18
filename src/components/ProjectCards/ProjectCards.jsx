import React, { useState, useEffect } from 'react';
import './ProjectCards.css';
import '../../assets/styles/colors.css';
import '../../assets/styles/fonts.css';
import { GoArrowUpRight } from "react-icons/go";
import { MdEdit, MdDelete } from "react-icons/md";

const defaultProjectsData = [
  {
    id: 1,
    category: "E-Commerce Platform for Fashion Hub",
    image: "/img/card1photo.png",
    title: "Chic Boutique",
    link: "https://www.chicboutique.com",
    description: "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
  },
  {
    id: 2,
    category: "Mobile App for Food Delivery Service",
    image: "/img/card2photo.png",
    title: "HungryBites",
    link: "https://www.hungrybites.com",
    description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
  {
    id: 3,
    category: "Booking and Reservation System for Event Management",
    image: "/img/card3photo.png",
    title: "EventMasters",
    link: "https://www.eventmasters.com",
    description: "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.",
  },
  {
    id: 4,
    category: "Custom Software for Workflow Automation",
    image: "/img/card4photo.png",
    title: "ProTech Solutions",
    link: "https://www.protechsolutions.com",
    description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
  {
    id: 5,
    category: "Web Portal for Real Estate Listings",
    image: "/img/card5photo.png",
    title: "Dream Homes Realty",
    link: "https://www.dreamhomesrealty.com",
    description: "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.",
  },
  {
    id: 6,
    category: "Mobile App for Fitness Tracking",
    image: "/img/card6photo.png",
    title: "FitLife Tracker",
    link: "https://www.fitlifetracker.com",
    description: "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.",
  },
  {
    id: 7,
    category: "Custom Software for Supply Chain Management",
    image: "/img/card7photo.png",
    title: "Global Logistics Solutions",
    link: "https://www.globallogisticssolutions.com",
    description: "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
  },
  {
    id: 8,
    category: "Educational Platform for Online Learning",
    image: "/img/card8photo.png",
    title: "EduConnect",
    link: "https://www.educonnect.com",
    description: "EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages.",
  },
  {
    id: 9,
    category: "Mobile App for Travel Planning",
    image: "/img/card9photo.png",
    title: "WanderWise",
    link: "https://www.wanderwise.com",
    description: "WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations.",
  },
  {
    id: 10,
    category: "Web Application for Customer Relationship Management",
    image: "/img/card10photo.png",
    title: "ConnectCRM",
    link: "https://www.connectcrm.com",
    description: "ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth.",
  },
];

function ProjectCards({ isDashboard = false, onEdit, onDelete, projects }) {
  const getInitialData = () => {
    if (Array.isArray(projects) && projects.length > 0) return projects;
    try {
      const stored = localStorage.getItem("projects_data");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return defaultProjectsData;
  };

  const [items, setItems] = useState(getInitialData);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    if (Array.isArray(projects) && projects.length > 0) {
      setItems(projects);
    } else {
      const stored = localStorage.getItem("projects_data");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setItems(parsed);
            return;
          }
        } catch (e) {
          console.error(e); 
        }
      }
      setItems(defaultProjectsData);
    }
  }, [projects]);

  const handleDelete = (id) => {
    const updated = items.filter((item) => String(item.id) !== String(id));
    setItems(updated);
    try {
      localStorage.setItem("projects_data", JSON.stringify(updated));
    } catch (e) {
      console.error("Error updating localStorage after delete", e);
    }

    if (onDelete) {
      onDelete(id);
    }
  };

  const bsShow = () => {
    if (visibleCount < items.length) {
      setVisibleCount(items.length);
    } else {
      setVisibleCount(4);
    }
  };

  return (
    <div className="bs-projects-section">
      <div className="bs-projects-grid">
        {items.slice(0, visibleCount).map((project) => (
          <div className="bs-card" key={project.id}>
            <div className="bs-card-category-header">
              <span>{project.category || project.projectName}</span>
            </div>

            <div className="bs-card-body">
              <div className="bs-card-image-container">
                <img src={project.image || project.imageUrl || '/img/card1photo.png'} alt={project.title} />

                {isDashboard && (
                  <div className="bs-card-hover-actions">
                    <button
                      type="button"
                      className="bs-action-btn edit-btn"
                      onClick={() => onEdit && onEdit(project)}
                      title="Edit"
                    >
                      <MdEdit />
                    </button>
                    <button
                      type="button"
                      className="bs-action-btn delete-btn"
                      onClick={() => handleDelete(project.id)}
                      title="Delete"
                    >
                      <MdDelete />
                    </button>
                  </div>
                )}
              </div>

              <h3 className="bs-card-title">{project.title}</h3>

              <div className="bs-card-top">
                <div className="bs-card-title-link-group">
                  <a href={project.link || project.projectLink} target="_blank" rel="noreferrer" className="bs-card-link-box">
                    {project.link || project.projectLink}
                  </a>
                </div>
                <a href={project.link || project.projectLink} target="_blank" rel="noreferrer" className="bs-card-arrow-btn">
                  <GoArrowUpRight className="arrow-img" />
                </a>
              </div>

              <p className="bs-card-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {items.length > 4 && (
        <div className="bs-more-container">
          <button onClick={bsShow} className="bs-load-more-btn">
            {visibleCount < items.length ? "Show More" : "Show Less"}
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectCards;
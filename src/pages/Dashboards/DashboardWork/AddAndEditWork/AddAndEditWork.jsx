import { useLocation, useNavigate } from 'react-router-dom';
import './AddAndEditWork.css';
import WorkProjectForm from '../../../../components/WorkForm/WorkForm';

const defaultProjectsData = [
  {
    id: 1,
    category: "E-Commerce Platform for Fashion Hub",
    image: "/img/card1photo.png",
    title: "Chic Boutique",
    link: "https://www.chicboutique.com",
    description: "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction."
  },
  {
    id: 2,
    category: "Mobile App for Food Delivery Service",
    image: "/img/card2photo.png",
    title: "HungryBites",
    link: "https://www.hungrybites.com",
    description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."
  },
  {
    id: 3,
    category: "Booking and Reservation System for Event Management",
    image: "/img/card3photo.png",
    title: "EventMasters",
    link: "https://www.eventmasters.com",
    description: "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences."
  },
  {
    id: 4,
    category: "Custom Software for Workflow Automation",
    image: "/img/card4photo.png",
    title: "ProTech Solutions",
    link: "https://www.protechsolutions.com",
    description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."
  },
  {
    id: 5,
    category: "Web Portal for Real Estate Listings",
    image: "/img/card5photo.png",
    title: "Dream Homes Realty",
    link: "https://www.dreamhomesrealty.com",
    description: "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily."
  },
  {
    id: 6,
    category: "Mobile App for Fitness Tracking",
    image: "/img/card6photo.png",
    title: "FitLife Tracker",
    link: "https://www.fitlifetracker.com",
    description: "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles."
  },
  {
    id: 7,
    category: "Custom Software for Supply Chain Management",
    image: "/img/card7photo.png",
    title: "Global Logistics Solutions",
    link: "https://www.globallogisticssolutions.com",
    description: "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs."
  },
  {
    id: 8,
    category: "Educational Platform for Online Learning",
    image: "/img/card8photo.png",
    title: "EduConnect",
    link: "https://www.educonnect.com",
    description: "EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages."
  },
  {
    id: 9,
    category: "Mobile App for Travel Planning",
    image: "/img/card9photo.png",
    title: "WanderWise",
    link: "https://www.wanderwise.com",
    description: "WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations."
  },
  {
    id: 10,
    category: "Web Application for Customer Relationship Management",
    image: "/img/card10photo.png",
    title: "ConnectCRM",
    link: "https://www.connectcrm.com",
    description: "ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth."
  }
];

export default function AddAndEditWork() {
  const location = useLocation();
  const navigate = useNavigate();

  const rawItem = location.state?.project || null;

  const editingItem = rawItem ? {
    id: rawItem.id,
    title: rawItem.title || '',
    projectName: rawItem.projectName || rawItem.category || '',
    imageUrl: rawItem.imageUrl || rawItem.image || '',
    projectLink: rawItem.projectLink || rawItem.link || '',
    description: rawItem.description || ''
  } : null;

  const getStoredProjects = () => {
    try {
      const saved = localStorage.getItem('projects_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Error reading localStorage in AddAndEditWork:', e);
    }
    return defaultProjectsData;
  };

  const handleSave = (updatedFromForm) => {
    const existing = getStoredProjects();

    const formattedItem = {
      id: updatedFromForm.id,
      title: updatedFromForm.title,
      category: updatedFromForm.projectName,
      projectName: updatedFromForm.projectName,
      image: updatedFromForm.imageUrl || '/img/card1photo.png',
      imageUrl: updatedFromForm.imageUrl || '/img/card1photo.png',
      link: updatedFromForm.projectLink,
      projectLink: updatedFromForm.projectLink,
      description: updatedFromForm.description
    };

    const updatedList = existing.map((item) =>
      Number(item.id) === Number(formattedItem.id) ? formattedItem : item
    );

    localStorage.setItem('projects_data', JSON.stringify(updatedList));
    navigate(-1);
  };

  const handleAdd = (newFromForm) => {
    const existing = getStoredProjects();

    const formattedItem = {
      id: newFromForm.id || Date.now(),
      title: newFromForm.title,
      category: newFromForm.projectName,
      projectName: newFromForm.projectName,
      image: newFromForm.imageUrl || '/img/card1photo.png',
      imageUrl: newFromForm.imageUrl || '/img/card1photo.png',
      link: newFromForm.projectLink,
      projectLink: newFromForm.projectLink,
      description: newFromForm.description
    };

    const updatedList = [formattedItem, ...existing];
    localStorage.setItem('projects_data', JSON.stringify(updatedList));
    navigate(-1);
  };

  return (
    <div className="add-edit-work-container">
      <WorkProjectForm 
        editingItem={editingItem} 
        onAdd={handleAdd} 
        onSave={handleSave} 
      />
    </div>
  );
}
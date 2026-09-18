
import { useLocation, useNavigate } from 'react-router-dom';
import './AddAndEditWork.css';

import WorkProjectForm from '../../../../components/WorkForm/WorkForm'; 

const defaultProjectsData = [
  { id: 1, category: "E-Commerce Platform for Fashion Hub", image: "/img/card1photo.png", title: "Chic Boutique", link: "https://www.chicboutique.com", description: "We developed a visually stunning and user-friendly e-commerce platform..." },
  { id: 2, category: "Mobile App for Food Delivery Service", image: "/img/card2photo.png", title: "HungryBites", link: "https://www.hungrybites.com", description: "HungryBites approached us to create a mobile app..." },
  { id: 3, category: "Booking and Reservation System for Event Management", image: "/img/card3photo.png", title: "EventMasters", link: "https://www.eventmasters.com", description: "EventMasters required a comprehensive booking..." },
  { id: 4, category: "Custom Software for Workflow Automation", image: "/img/card4photo.png", title: "ProTech Solutions", link: "https://www.protechsolutions.com", description: "Custom workflow software..." },
  { id: 5, category: "Web Portal for Real Estate Listings", image: "/img/card5photo.png", title: "Dream Homes Realty", link: "https://www.dreamhomesrealty.com", description: "Dream Homes Realty wanted an intuitive portal..." },
  { id: 6, category: "Mobile App for Fitness Tracking", image: "/img/card6photo.png", title: "FitLife Tracker", link: "https://www.fitlifetracker.com", description: "FitLife Tracker approached us to develop..." },
  { id: 7, category: "Custom Software for Supply Chain Management", image: "/img/card7photo.png", title: "Global Logistics Solutions", link: "https://www.globallogisticssolutions.com", description: "Global Logistics Solutions required..." },
  { id: 8, category: "Educational Platform for Online Learning", image: "/img/card8photo.png", title: "EduConnect", link: "https://www.educonnect.com", description: "EduConnect sought an educational platform..." },
  { id: 9, category: "Mobile App for Travel Planning", image: "/img/card9photo.png", title: "WanderWise", link: "https://www.wanderwise.com", description: "WanderWise wanted a mobile app..." },
  { id: 10, category: "Web Application for Customer Relationship Management", image: "/img/card10photo.png", title: "ConnectCRM", link: "https://www.connectcrm.com", description: "ConnectCRM needed a web application..." }
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
    const saved = localStorage.getItem('projects_data');
    return saved ? JSON.parse(saved) : defaultProjectsData;
  };

  const handleSave = (updatedFromForm) => {
    const existing = getStoredProjects();


    const formattedItem = {
      id: updatedFromForm.id,
      title: updatedFromForm.title,
      category: updatedFromForm.projectName, 
      image: updatedFromForm.imageUrl,       
      link: updatedFromForm.projectLink,   
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
      image: newFromForm.imageUrl || '/img/card1photo.png',
      link: newFromForm.projectLink,
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
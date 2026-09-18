
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import './DashboardWork.css';
import ProjectCards from '../../../components/ProjectCards/ProjectCards';

export default function DashboardWork() {
  const navigate = useNavigate();

  const handleEdit = (project) => {
    navigate('add', { state: { project } });
  };

  const handleDelete = (id) => {
    console.log('Project deleted:', id);
  };

  return (
    <div className="dashboard-work-page">
      <div className="dashboard-work-header">
        <Link to="add" className="dashboard-add-link">
          <Button
            name="Add Project"
            width="100%"
            height="38px"
            fontSize="28px"
            backgroundColor="var(--green50, #9eff00)"
            border="1px solid var(--green50, #9eff00)"
            color="var(--grey30, #191919)"
            borderRadius="8px"
          />
        </Link>
      </div>

      <div className="dashboard-work-cards-wrapper">
        <ProjectCards 
          isDashboard={true} 
          onEdit={handleEdit} 
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
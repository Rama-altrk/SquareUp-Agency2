import Sidebar from '../../../components/Sidebar/Sidebar'
import './DashboardPages.css'
import { Outlet , useLocation ,Link} from 'react-router-dom'

export default function DashboardPages() {
    // const location = useLocation();

    // const renderBreadcrumbs =(path) =>{
    //     if(path === '/dashboard'){
    //         return(
    //             <span>dashboard/Home</span>
    //         )
    //     }
    // }

    // const getSubPageTitle = (p) => {
    //     if (p === '/dashboard/services') return 'Dashboard/Services';
    //     if (p === '/dashboard/chooseUs') return 'Dashboard/chooseUs';
    //     if (p === '/dashboard/feedback') return 'Dashboard/feedback';
    //     if (p === '/dashboard/faq') return 'Dashboard/faqSection';
    //     if (p === '/dashboard/work') return 'Dashboard/work';
    //     if (p === '/dashboard/process') return 'Dashboard/process';
    //     if (p === '/dashboard/about') return 'Dashboard/about';
    
    //     return 'Dashboard'; }
    //     return (
    //         <div className="breadcrumbs-flex">
    //             <Link to="/dashboard" className="breadcrumb-link">dashboard</Link>
    //             <span className="breadcrumb-separator"> / </span>
    //             <span className="breadcrumb-item active">{getSubPageName(path)}</span>
    //         </div>
    //         );
    //     };
    return (
        <div className='rtMainDashContainer'>
            <Sidebar/>
            <main className='rtDashContent'>
                <Outlet/>
            </main>
        </div>
    )
}

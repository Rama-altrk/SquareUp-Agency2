import { useState , useEffect} from 'react';
import Logo from '../Logo/logo'
import './Sidebar.css'
import { NavLink , useLocation , Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { HiMenuAlt3 } from 'react-icons/hi'; 
import { FaTimes } from 'react-icons/fa';



export default function Sidebar() {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false);
    const [isHomeSubOpen, setIsHomeSubOpen] = useState(false);

    useEffect(()=>{
        const currentPath = location.pathname

        if (
            currentPath.includes('/dashboard/services') || 
            currentPath.includes('/dashboard/chooseUs') || 
            currentPath.includes('/dashboard/feedback') || 
            currentPath.includes('/dashboard/faq')
        ) {
            setIsHomeSubOpen(true)
        } else {
            setIsHomeSubOpen(false)
        }
    },[location.pathname])
    return (
        <>
            <aside className= {`rtSidebar`}>
                <div className='rtDashWrapper'>
                    
                    <div className='rtHeaderDash'>
                        <Link to="/"><IoIosArrowBack className='rtBackHome'/></Link>
                        <h1>Dashboard</h1>
                    </div>

                    <nav className= {`rtSidebarMenu ${isOpen ? 'open' : ''}`}>
                        <ul>
                            <li>
                                <NavLink to="/dashboard" end={true} >
                                    Home
                                </NavLink>
                                {isHomeSubOpen && (
                                    <ul className="rtSubMenu" >
                                        <li>
                                            <NavLink to="/dashboard/services" onClick={() => setIsOpen(false)}>Our service</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/chooseUs" onClick={() => setIsOpen(false)}>Why Choose us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/feedback" onClick={() => setIsOpen(false)}>feedback</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/faq" onClick={() => setIsOpen(false)}>faq</NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <NavLink to="/dashboard/work" onClick={() => setIsOpen(false)}>
                                    Work
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/process" onClick={() => setIsOpen(false)}>
                                    Process
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/about" onClick={() => setIsOpen(false)}>
                                    About
                                </NavLink>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
                <Logo className="rtDashLogo"/>
                <div className='rtDashMobileContainer'>
                    <button className="rtMenuIconDash"  onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes size={28}/> : <HiMenuAlt3 size={28}/>}
                    </button>
                </div>
            </aside>
            
        </>
    )
}

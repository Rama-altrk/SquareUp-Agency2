import { Outlet } from "react-router-dom"
import Footer from "../Footer/footer"
import Nav from "../Nav/nav"


export default function PublicPages({navItems}) {
    return (
        <>
            <Nav 
                items={navItems} 
                activePath="Home" 
                btnText="Contact Us" 
            /> 
            <div className="rtMainContainer">
                <Outlet/>
            </div>

            <Footer/>
        </>
    )
}

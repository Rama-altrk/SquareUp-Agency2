import { Outlet } from "react-router-dom"
import Footer from "../Footer/footer"
import Nav from "../Nav/nav"
import { useState , useEffect } from "react"
import { getItemFromLocalstorage } from "../../utils/localstorage"

const ACTIVE_KEY = "activeUserName"
export default function PublicPages({navItems}) {
    const [activeUser, setActiveUser] = useState("")
    useEffect(()=>{
        const savedName = getItemFromLocalstorage(ACTIVE_KEY)
        if(savedName){
            setActiveUser(savedName)
        } else {
        setActiveUser("")
        }
    },[])
    return (
        <>
            <Nav 
                items={navItems} 
                activePath="Home"
                btnText={(typeof activeUser === "string" && activeUser.length > 0) ? activeUser : "Contact Us"}
            /> 
            <div className="rtMainContainer">
                <Outlet context={{ onSaveSuccess: setActiveUser }} />
            </div>

            <Footer/>
        </>
    )
}

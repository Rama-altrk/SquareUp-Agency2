import { useState, useEffect } from 'react'
import { getItemFromLocalstorage } from "../../../utils/localstorage";
import UserCard from '../../../components/UserCard/UserCard';
import './DashboardUsers.css'

const USERS_KEY = "users"
const ACTIVE_KEY = "activeUserName"
export default function DashboardUsers() {
    const [users , setUsers] = useState([])
    useEffect(()=>{
        const savedUsers = getItemFromLocalstorage(USERS_KEY)
        setUsers(savedUsers)
    },[])
    return (
        <div >
            {users.length === 0 ? (
                <p style={{ color: "var(--grey90)" }}>No users registered yet.</p>
            ) : (
                <div className='rtAllUsers'>
                {users.map((item) => (
                    <UserCard 
                    className= "rtOneUser"
                    key={item.id}
                    id={item.id}
                    fullName={item.fullName} 
                    email={item.email}
                    message={item.message}
                    reasons={item.reasons} 
                    />
                ))}
                </div>
            )}
        </div>
    )
}






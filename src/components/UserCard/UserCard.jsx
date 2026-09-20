import { FaUser } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import './UserCard.css'


export default function UserCard({id, fullName, email, message, reasons}) {
    return (
        <div className="rtUserCard">
            <span className="rtUserId">{`#${id}`}</span>
            <div className="rtNameUser">
                <FaUser className="rtIconUser"/>
                <p className="rtFullName">{fullName}</p>
            </div>
            <div className="rtEmailUser">
                <HiMail className="rtIconUser"/>
                <p>{email}</p>
            </div>
            <div className="rtMessageUser">
                <p className="rtLabelMessage">MESSAGE:</p>
                <p className="rtContentMessage">{`"${message}"`}</p>
            </div>
            <div className="rtReasons">
                {reasons && reasons.length > 0 ? (
                reasons.map((reason, index) => (
                    <span 
                        key={index} 
                        className="rtReasonTag"
                    >
                    {reason}
                    </span>
                ))
                ) : (
                <span >No options selected</span>
                )}
            </div>
        </div>
    )
}

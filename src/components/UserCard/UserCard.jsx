import { FaUser } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import './UserCard.css'


export default function UserCard({className, id, fullName, email, message, reasons}) {
    return (
        <div className={`${className} rtUserCard`}>
            <span className="rtUserId">{`#${id}`}</span>
            <div className="rtNameUser">
                <FaUser className="rtIconUser"/>
                <p className="rtFullName">{fullName}</p>
            </div>
            <div className="rtEmailUser">
                <HiMail className="rtIconUser" style={{fontSize: "20px"}}/>
                <p>{email}</p>
            </div>
            <div className="rtMessageUser">
                <p className="rtLabelMessage">MESSAGE:</p>
                <p className="rtContentMessage">{ message? `"${message}"` : "There is no message from this user"}</p>
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
                <p>No options selected</p>
                )}
            </div>
        </div>
    )
}

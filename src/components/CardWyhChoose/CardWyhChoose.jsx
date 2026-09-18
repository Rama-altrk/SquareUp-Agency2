import './CardWyhChoose.css'
import { MdEdit, MdDelete} from "react-icons/md";
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function CardWyhChoose({ classNameContainer , classNameCard, classNameAction , image, title, contnet ,linkEdit ,onClickEdit , classDelete , onClickDelete}) {
    return (
        <div className={`rtContainerChoose ${classNameContainer}`}>
            <div className={`${classNameCard} mr-card`}>
                <div className="mr-title-logo">
                    <div className="mr-logo"><img src={image} alt="ExpertiseIcon.png" /></div>
                    <h1>{title}</h1>
                </div>
                <p>{contnet}</p>
            </div>
            <div className={`rtStorageActionChoose ${classNameAction}`}>
                <Link to={linkEdit} className='rtEditPen'>
                    <Button
                    name= {<MdEdit />}
                    width= "46px"
                    height= "46px"
                    fontSize= "30px"
                    backgroundColor= "var(--green50)"
                    border= "1px solid var(--green50)"
                    borderRadius= "6px"
                    onClick={onClickEdit}
                    />
                </Link>
                <Button
                    name= {<MdDelete />}
                    width= "46px"
                    height= "46px"
                    fontSize= "30px"
                    backgroundColor= "red"
                    border= "1px solid red"
                    borderRadius= "6px"
                    className= {`rtDelete ${classDelete}`}
                    onClick={onClickDelete}
                    type= "button"
                    
                />
            
            </div>
        </div>

    )
}

export default CardWyhChoose
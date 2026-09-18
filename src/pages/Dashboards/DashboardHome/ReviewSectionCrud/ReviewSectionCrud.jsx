import Button from '../../../../components/Button/Button'
import './ReviewSectionCrud.css'
import { Link } from 'react-router-dom'


export default function ReviewSectionCrud() {
  return (
    <>
        <Link to="add">
                <Button 
                    name= "add"
                    width="100%"
                    height= "34px"
                    fontSize= "28px"
                    backgroundColor= "var(--green50)"
                    border= "1px solid var(--green50)"
                    color= "var(--grey30)"
                    borderRadius= "8px"
                />
            </Link>
    </>
  )
}

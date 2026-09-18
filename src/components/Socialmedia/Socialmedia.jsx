import { COLORS } from '../../assets/constants/colors'
import { FONTS } from '../../assets/constants/fonts'
import './Socialmedia.css'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

function Socialmedia() {
  return (
       <div className='bh-container'>
          <a href="#" style={{...FONTS.medium}} className='bh-child1'> <div className="bh-Facebook"><MdEmail style={{color:COLORS.green60,fontSize:26.25}}/></div>hello@squareup.com</a>
          <a href="#" style={{...FONTS.medium}} className='bh-child1'><div className="bh-ohone"><MdPhone style={{color:COLORS.green60,fontSize:26.25}}/></div>+91 91813 23 2309</a>
          <a href="#" style={{...FONTS.medium}} className='bh-child1'><div className="bh-location"><MdLocationOn  style={{color:COLORS.green60,fontSize:26.25}}/></div>Get Location</a>
    </div>

  )
}
export default Socialmedia
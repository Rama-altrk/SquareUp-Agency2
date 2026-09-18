import { COLORS } from '../../assets/constants/colors';
import { FONTS } from '../../assets/constants/fonts'
import './Contactmeta.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';


function Contactmeta() {
  return (
    <div className='bh-Contactmeta'>
        <div className='bh-Contactmeta1'>
          <div className="box1">
              <span className='bh-spn1'style={{...FONTS.medium}}>Operating Days</span>
            <span className='bh-spn2'style={{...FONTS.medium}}>Monday to Friday</span>
          </div>
        </div>
        <div className='bh-Contactmeta2'>
           <div className="bh-box">
             <span className='bh-spn3' style={{...FONTS.medium}}>Stay Connected</span>
            <div className='bh-icon'>
                <div className="big"><a href="#" ><div className="bh-iface"><FaFacebookF style={{color:COLORS.grey15,fontSize:20}}/></div></a></div>
              <div className="big"><a href="#" ><div className="bh-itwitter"><FaTwitter style={{color:COLORS.green50,fontSize:20}}/></div></a></div>
              <div className="big">  <a href="#"><div className="bh-linkedin"><FaLinkedinIn style={{color:COLORS.grey15,fontSize:20}}/></div></a></div>




            </div>
            
           </div>
        </div>
    
    </div>
  )
}

export default Contactmeta



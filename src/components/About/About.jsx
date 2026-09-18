
import { COLORS } from '../../assets/constants/colors';
import { FONTS } from '../../assets/constants/fonts';
import Button from '../Button/Button';

import './About.css'

function About({ reviews }) {
  return (
      <div className="bh-cards">
        {
        reviews.map((item, index) => (
          <div className="bh-card" key={index} style={{backgroundColor:COLORS.grey10}}>
            <h3 className='bh3' style={{color:COLORS.green80,...FONTS.medium}}>{item.title}</h3>
            <p className='bh-p' style={{color:COLORS.grey90,...FONTS.regular}}>{item.text} </p>

            <div className="bh-small-card" style={{backgroundColor:COLORS.grey10}}>
              <div className="profile-block">
                <img
                  className="profile-img"
                  src={item.image}
                  alt={item.author}
                />

                <div className="profile-info">
                  <span className="bh-author" style={{color:COLORS.absolutefff,...FONTS.medium}}>{item.author}</span>
                  <p className="bh-author-title" style={{color:COLORS.grey90,...FONTS.regular}}>{item.authorTitle}</p>
                </div>
              </div>

                <Button 
                    name="Open Website"
                    width="149px"
                    height="63px"
                    fontSize="18px"
                    borderRadius="6px"
                    backgroundColor="var(--grey15)"
                    color=" var(--absolutefff)"
                    border="none"
                    className="bh-btn"/>
            </div>
          </div>
        )
        )}
      </div>

  
  );
}

export default About;


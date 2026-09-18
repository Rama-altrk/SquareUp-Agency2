import Contact from '../../pages/Contact/Contact';
import Work from '../../pages/Work/Work';
import Button from '../Button/Button';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero">
      <div className='rtContainerhero rtHeroPadding'>
        <h1 className="hero-title">
          A Digital Product Studio<br/>that will Work
        </h1>
        <div className="hero-tags">
          <span className="hero-tag-plain">For</span>
          <span className="hero-tag">Startups</span>
          <span className="hero-tag-plain">,</span>
          <span className="hero-tag">Enterprise leaders</span>
          <span className="hero-tag-plain">,</span>
          <span className="hero-tag">Media & Publishers</span>
          <span className="hero-tag-plain">and</span>
          <span className="hero-tag">Social Good</span>
        </div>

        <div className="hero-tags-mobile">
          <p>For startups, enterprise leaders, media & publishers, and social good.</p>
        </div>
      </div>
      <div className="hero-buttons">
        <Link to="/work">
          <Button
            name={"Our Work"}
            height={58}
            width={137}
            fontSize={18}
            borderRadius={10}
            backgroundColor={"#24242433"}
            color={"var(--absolutefff)"}
            border={"1px solid var(--grey20)"}
            className={"rtButtonOurWork"}
          />
        </Link>
        <Link to= "/Contact">
          <Button
            name={"Contact Us"}
            height={58}
            width={143}
            fontSize={18}
            borderRadius={10}
            backgroundColor={"var(--green50)"}
            color={"var(--grey15)"}
            border={"1px solid var(--green50)"}
            className={"rtButtonContactHero"}
          />
        </Link>
      </div>
      
      <div className="hero-bg-wrapper">
        <img
          src="/img/homeImg/HeroBackground.png"
          alt="hero waves"
          className="hero-bg"
        />
      </div>
    </div>
  );
}

export default Hero;
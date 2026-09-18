
import './logo.css'

const Logo = ({ 
  icon = "/img/squareIcon.png", 
  textImg = "/img/homeImg/SquareUp.png", 
  altText = "SquareUp" ,
  className
}) => {
  return (
    <div className={`${className} logo-container`}>
      <div className="logo-box">
        <img src={icon} alt="Logo Icon" />
      </div>
      <img src={textImg} alt={altText} className="logo-text-img" />
    </div>
  );
};

export default Logo;
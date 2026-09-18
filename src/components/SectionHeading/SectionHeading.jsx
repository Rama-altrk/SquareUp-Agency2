import './SectionHeading.css';

function SectionHeading({ title, description, background, className}) {
  

  return (
    <section
      className={`${className} section-heading`}
    >
      <img src={`/img/backgrounds/${background}`} alt="background wave" className='rtBackImg'/>
      <div className='rtLayoutOverly'></div>
      <div className="section-heading__content">
        <h2 className="section-heading__title">{title}</h2>
        <p className="section-heading__description">{description}</p>
      </div>
    </section>
  );
} 

export default SectionHeading;
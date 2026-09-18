import './Work.css'
import ProjectCards from '../../components/ProjectCards/ProjectCards'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import SquareUp from '../../components/SquareUp/SquareUp'
// import AtSquareUpSection from '../../components/AtSquareUpSection/AtSquareUpSection'
import TextBeforCard from '../../components/TextBeforCard/TextBeforCard'

export default function Work() {
  return (
    <>
      <SectionHeading
        title="Our Works"
        description="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
        background="waveToUp.png"
        className= "rtWorkHeading"
      />
      <TextBeforCard
        title= "At SquareUp"
        description= "We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
        subTitle= "Here are ten examples of our notable works:"
      />
      <ProjectCards/>
      <SquareUp
        className= "rtWorkSquareUp"
        title= "Let us Bring your Ideas to Life in the Digital World."
        description= "No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
      />

    </>
  )
}

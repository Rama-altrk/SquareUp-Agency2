 
import Faq from "../../components/FaqSection/Faq"
import Contactmeta from "../../components/Contactmeta/Contactmeta";
import Socialmedia from "../../components/Socialmedia/Socialmedia";
import './Contact.css'
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import CtaSection from '../../components/CtaSection/CtaSection';
import ContactForm from "../../components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <>
      <SectionHeading
        className= "rtProcessHeading"
        title= "Contact Us"
        description= "Get in touch with us today and let us help you with any questions or inquiries you may have."
        background="doubleWaveToUp.png"
      />
      <Socialmedia/>
      <ContactForm/>
      <Contactmeta/>
      <SectionHeading
          title="Frequently Asked Questions"
          description="Still you have any questions? Contact our Team via hello@squareup.com"
          background="doubleWaveToUp.png"
      />
      <Faq />
      <CtaSection className= "rtCtaContact"/>
    </>
  )
}


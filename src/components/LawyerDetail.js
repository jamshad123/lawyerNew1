import React from 'react'
import BarAdmissions from "./BarAdmissions";
import Details from "./Details";
import Education from "./Education";
import Header from "./Header";
import Languages from "./Languages";
import NotableCases from "./NotableCases";
import ProfessionalEndorsements from "./ProfessionalEndorsements";
import ClientTestimonials from "./ClientTestimonials";
import ProfessionalAffiliations from "./ProfessionalAffiliations";
import Publications from "./Publications";
import PersonalInterests from "./PersonalInterests";

function LawyerDetail(props) {
  return (
    <div><Header/>
    <div className="w-[90%] md:w-[80%] mx-auto my-0">
      <Details/>
      <BarAdmissions/>
      <Languages/>
      <Education/>
      <ProfessionalEndorsements/>
      <NotableCases />
      <ClientTestimonials/>
      <ProfessionalAffiliations/>
      <Publications/>
      <PersonalInterests/>
    </div></div>
  )
}

export default LawyerDetail
import image3 from "../../Assets/Images/CaseStudyScreen/vezeeta.png"
import image6 from "../../Assets/Images/CaseStudyScreen/Vezeeta-Logo 3.png"
import image5 from "../../Assets/Images/CaseStudyScreen/gourmetlogo.png"
import image1 from "../../Assets/Images/CaseStudyScreen/gourmet-teaser.png"

export const caseStudiesData = [
  {
    id: 1,
    company: "Gourmet Egypt",
    companyLogo: image5,
    image: image1, 
    title: "Gourmet Egypt",
    description: "How Gourmet Egypt Boosted Retention with cloudcom’s CPaaS Solutions",
    stats: [
      { value: "22%", label: "Boosted Retention" },
      { value: "35%", label: "Customer Engagement" },
    ],
    buttonLabel: "Read more →",
    link: "/CaseStudy/gourmet"
  },
  {
    id: 2,
    company: "Vezeeta",
    companyLogo: image6,
    image: image3,
    title: "Vezeeta",
    description: "How Vezeeta Achieved a 28% Increase in Pharmacy Orders Using cloudcom's Omnichannel Communication",
    stats: [
      { value: "28%", label: "Increase in Pharmacy Orders" }
    ],
    buttonLabel: "Read more →",
    link: "/CaseStudy/visita"
  },
  ];
import image1 from "../../Assets/Images/CaseStudyScreen/gourmet-teaser.png"
import image2 from "../../Assets/Images/CaseStudyScreen/Mask group.png"
import image3 from "../../Assets/Images/CaseStudyScreen/vezeeta.png"
import image4 from "../../Assets/Images/CaseStudyScreen/gourmet-teaser.png"
import image5 from "../../Assets/Images/CaseStudyScreen/gourmetlogo.png"
import image6 from "../../Assets/Images/CaseStudyScreen/Vezeeta-Logo 3.png"
import image7 from "../../Assets/Images/CaseStudyScreen/reachlogo.png"


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
      company: "Reach Finance",
      companyLogo: image7,
      image: image2,
      title: "Reach Finance",
      description: "How Reach Finance Increased with cloudcom’s Omnichannel Messaging Solutions",
      stats: [
        { value: "32%", label: "Increased Email Open Rates" },
        { value: "25%", label: "Repeat Transactions" },
      ],
      buttonLabel: "Read more →",
      link: "/CaseStudy/reachFinance"
    },
    {
      id: 3,
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
    {
      id: 4,
      company: "Gourmet Egypt",
      companyLogo: image5, 
      image: image4, 
      title: "Gourmet Egypt",
      description: "How Gourmet Egypt Boosted Retention with cloudcom’s CPaaS Solutions",
      stats: [
        { value: "22%", label: "Boosted Retention" },
        { value: "35%", label: "Customer Engagement" },
      ],
      buttonLabel: "Read more →",
      link: "/CaseStudy/gourmet"
    },
    // More case study data as needed
  ];
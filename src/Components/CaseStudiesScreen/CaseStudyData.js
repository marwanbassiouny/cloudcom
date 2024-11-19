import image1 from "../../Assets/Images/CaseStudyScreen/gourmet-teaser.png"
import image4 from "../../Assets/Images/CaseStudyScreen/gourmet-teaser.png"
import image5 from "../../Assets/Images/CaseStudyScreen/gourmetlogo.png"
import image6 from "../../Assets/Images/CaseStudyScreen/Vezeeta-Logo 3.png"
import image7 from "../../Assets/Images/CaseStudyScreen/reachlogo.png"

import successStoriesImage_gourmet from '../../Assets/Images/HomeScreen/SuccessStoriesComponent/SuccessStoriesImage_gourmet.svg';
import SuccessStoriesImage_reach from '../../Assets/Images/HomeScreen/SuccessStoriesComponent/SuccessStoriesImage_reach.png';
import SuccessStoriesImage_visita from '../../Assets/Images/HomeScreen/SuccessStoriesComponent/SuccessStoriesImage_visita.png';

export const caseStudiesData = [
    {
      id: 1,
      company: "Gourmet Egypt",
      companyLogo: image5,
      image: image1, 
      homePageImage : successStoriesImage_gourmet,
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
      // image: image2,
      image: SuccessStoriesImage_reach,
      homePageImage : SuccessStoriesImage_reach,
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
      // image: image3,
      image: SuccessStoriesImage_visita,
      homePageImage : SuccessStoriesImage_visita,
      title: "Vezeeta",
      description: "How Vezeeta Achieved a 28% Increase in Pharmacy Orders Using cloudcom's Omnichannel Communication",
      stats: [
        { value: "28%", label: `Increase in Pharmacy Orders` },
        { value: "35%", label: "Customer Engagement" },
      ],
      buttonLabel: "Read more →",
      link: "/CaseStudy/visita"
    },
    {
      id: 4,
      company: "Gourmet Egypt",
      companyLogo: image5, 
      image: image4, 
      homePageImage : successStoriesImage_gourmet,
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
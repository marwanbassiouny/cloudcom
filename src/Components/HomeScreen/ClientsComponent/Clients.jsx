import React, { useEffect, useRef } from 'react';
import './Clients.css';
import client1Icon from '../../../Assets/Icons/HomeScreen/ClientsComponent/client1.png';
import client2Icon from '../../../Assets/Icons/HomeScreen/ClientsComponent/client2.png';
import client3Icon from '../../../Assets/Icons/HomeScreen/ClientsComponent/client3.png';
import client4Icon from '../../../Assets/Icons/HomeScreen/ClientsComponent/client4.png';
import client5Icon from '../../../Assets/Icons/HomeScreen/ClientsComponent/client5.png';
import client6Icon from '../../../Assets/Icons/HomeScreen/ClientsComponent/client6.png';
import client7Icon from '../../../Assets/Icons/HomeScreen/ClientsComponent/client7.png';

const Clients = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Create an infinite scrolling effect by duplicating the logos
    const duplicatedLogos = scrollContainer.innerHTML;
    scrollContainer.innerHTML += duplicatedLogos;

    let scrollAmount = 0;

    const scrollSpeed = 2; // Adjust this value for faster scrolling (higher = faster)

    const scrollLogos = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0; // Reset to create an infinite loop
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scrollLogos); // Ensure smooth animation
    };

    requestAnimationFrame(scrollLogos); // Start the scrolling

  }, []);

  return (
    <div className="clients-container">
      <p className="clients-section-title">130K+ Clients trust in cloudcom</p>
      <div className="clients-section-line"></div>
      <div className="scrolling-img-section" ref={scrollContainerRef}>
        <div className="clients-logos">
          <div className='client_logo_container'><img src={client1Icon} alt="client1Icon" className="client_icon" loading="lazy"/></div>
          <div className='client_logo_container'><img src={client2Icon} alt="client2Icon" className="client_icon" loading="lazy"/></div>
          <div className='client_logo_container'><img src={client3Icon} alt="client3Icon" className="client_icon" loading="lazy"/></div>
          <div className='client_logo_container'><img src={client4Icon} alt="client4Icon" className="client_icon" loading="lazy"/></div>
          <div className='client_logo_container'><img src={client5Icon} alt="client5Icon" className="client_icon" loading="lazy"/></div>
          <div className='client_logo_container'><img src={client6Icon} alt="client6Icon" className="client_icon" loading="lazy"/></div>
          <div className='client_logo_container'><img src={client7Icon} alt="client7Icon" className="client_icon" loading="lazy"/></div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

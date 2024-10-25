import React from 'react';
import './Clients.css';
import client1Icon from '../../../Assets/Icons/HomeScreen/ClientsComponent/client1.png'
import client2Icon from '../../../Assets/Icons/HomeScreen/ClientsComponent/client2.png'
import client3Icon from '../../../Assets/Icons/HomeScreen/ClientsComponent/client3.png'
import client4Icon from '../../../Assets/Icons/HomeScreen/ClientsComponent/client4.png'
import client5Icon from '../../../Assets/Icons/HomeScreen/ClientsComponent/client5.png'
import client6Icon from '../../../Assets/Icons/HomeScreen/ClientsComponent/client6.png'
import client7Icon from '../../../Assets/Icons/HomeScreen/ClientsComponent/client7.png'
import textContent from '../../../Assets/Data/HomeScreen/ClientsComponent/ClientsComponent.json'

const Clients = () => {
  return (
    <div className="clients-container">
      <h2>{textContent.clients}</h2>
      <div className="clients-logos">
        <img src={client1Icon} alt="client1Icon" />
        <img src={client2Icon} alt="client2Icon" />
        <img src={client3Icon} alt="client3Icon" />
        <img src={client4Icon} alt="client4Icon" />
        <img src={client5Icon} alt="client5Icon" />
        <img src={client6Icon} alt="client5Icon" />
        <img src={client7Icon} alt="client5Icon" />
      </div>
    </div>
  );
};

export default Clients;

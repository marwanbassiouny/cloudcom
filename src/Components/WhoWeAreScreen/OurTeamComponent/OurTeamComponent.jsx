import React from 'react';
import './OurTeamComponent.css';
import teamMemberImage from '../../../Assets/Icons/WhoWeAreScreen/OurTeamComponent/teamMember.svg'

const teamMembers = [
  {
    name: 'Amr Abdelrahman',
    role: 'UI-UX',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    active: false,
  },
  {
    name: 'Amr Abdelrahman',
    role: 'UI-UX',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    active: true,
  },
  {
    name: 'Amr Abdelrahman',
    role: 'UI-UX',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    active: false,
  },
];

const OurTeamComponent = () => {
  return (
    <div className="team-container">
      <h2 className="team-header">Our Team</h2>
      <h3 className="team-subheader">Customer experience that connects</h3>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div key={index} className={`team-card ${member.active ? 'active' : ''}`}>
            <img src={teamMemberImage} alt={member.name} className="team-image" />
            <h4 className="team-name">{member.name}</h4>
            <p className="team-role">{member.role}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeamComponent;

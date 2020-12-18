import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users, selectedUser }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <h4>If you want to personel chat please click the user name and then sent message</h4>
            <div className="activeContainer">
              <h2>
                {users.map(({name, id}) => (
                  <div key={name} className="activeItem" onClick = {()=>selectedUser(id)}>
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;
import React from "react";
import "./Profilecard.css";
import PropTypes from 'prop-types';
import { string } from 'prop-types';
function profilecard({info}) {

  const { email, first_name, avatar: url } = info;

  return (
    <div className="profile__container">
      <div className="profile__header">
        <div className="profie__avatar">
          <img src={url} alt="avatar" className="avatar__image" />
        </div>
        <div className="profile__header__description">
          <h3 className="firstName">{first_name}</h3>
          <h3 className="email">{email}</h3>
        </div>
      </div>
      <div className="profile__body">
        <p className="profile__body__description">
          Dolore ut non velit proident est nostrud tempor dolore enim consequat.
          Officia magna exercitation excepteur incididunt. Enim tempor quis
          fugiat qui do ipsum magna excepteur.
        </p>
      </div>
    </div>
  );
}

profilecard.propTypes ={
    info: PropTypes.shape({
        email: string.isRequired,
        first_name: string.isRequired,
        avatar: string.isRequired,
    }).isRequired
}

export default profilecard;

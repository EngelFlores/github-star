import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBook, faMapMarkerAlt, faAt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import "./UserInfo.css"

const UserInfo = ({ name, bio, location, email, avatar, url }) => {
  return (
    <div className="user-box">
      <img className="user-box__avatar" src={avatar}/>
      <div><FontAwesomeIcon icon={faUser} /> <span data-testid="user-name">{name || "-"}</span></div>
      <div><FontAwesomeIcon icon={faBook} /> <span data-testid="user-bio">{bio || "-"}</span></div>
      <div><FontAwesomeIcon icon={faMapMarkerAlt} /> <span data-testid="user-location">{location || "-"}</span></div>
      <div><FontAwesomeIcon icon={faEnvelopeOpenText} /> <span data-testid="user-email">{email || "-"}</span></div>
      <div><FontAwesomeIcon icon={faAt} /> <span data-testid="user-url">{url || "-"}</span></div>
    </div>
  )
}

export default UserInfo;
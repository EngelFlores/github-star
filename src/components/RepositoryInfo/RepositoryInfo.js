import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "./RepositoryInfo.css"

const RepositoryInfo = ({ name, description, owner, starRepo, checkRepositoryStatus }) => {
  const [color, setColor] = useState("grey");

  useEffect(() => {
    const getColor = async () => {
      const response = await checkRepositoryStatus(owner, name)
      console.log(response);
      if (response) {
        setColor("yellow")
      } else {
        setColor("grey")
      }
    }
    getColor();
  }, []);

  return (
    <div className="repository-box">
      <h3 data-testid="repo-name">{name && name}</h3>
      <p data-testid="repo-description">{description && description}</p>
      <FontAwesomeIcon className="repository-box__icon" onClick={() => starRepo(owner, name)} color={color} icon={faStar} />
    </div>
  )
}

export default RepositoryInfo;
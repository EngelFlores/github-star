import React, { useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox"
import RepositoryInfo from "../../components/RepositoryInfo/RepositoryInfo"
import UserInfo from "../../components/UserInfo/UserInfo"

import githubService from '../../api/githubService';
import "./GithubStar.css"

const GithubStar = () => {
  const [userName, setUserName] = useState("");
  const [repositoryData, setRepositoryData] = useState(false);
  const [userData, setUserData] = useState("");

  const getData = async () => {
    const repoResponse = (await githubService.getStarredRepositories(userName)).data;
    const userResponse = (await githubService.getUserInfo(userName)).data;
    setUserData(userResponse)
    setRepositoryData(repoResponse)
  }

  const checkRepositoryStatus = async (repoOwner, repoName) => {
    return await githubService.checkStarredRepository(repoOwner, repoName);
  }

  const starRepo = async (repoOwner, repoName) => {
    return await githubService.starRepository(repoOwner, repoName);
  }

  return (
    <div>
      <h1 className="title">Github Stars</h1>
      <div className="container">
        <div className="container__left-column">
          <SearchBox disabled={!userName} searchFn={getData} setUserName={setUserName}></SearchBox>
          {userData && <h2 className="container__left-column-title">User Info</h2>}
          {userData && <UserInfo name={userData.login} bio={userData.bio} location={userData.location} email={userData.email} avatar={userData.avatar_url} url={userData.url}></UserInfo>}
        </div>
        <div className="container__right-column">
          {repositoryData && <h2>Starred Repos</h2>}
          {repositoryData && repositoryData.map(element => {
            const owner = element.owner.login
            const name = element.name
            return (
              <RepositoryInfo starRepo={starRepo} checkRepositoryStatus={checkRepositoryStatus} owner={owner} key={element.id} name={name} description={element.description}></RepositoryInfo>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default GithubStar;
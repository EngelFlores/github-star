import React, { useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox"
import RepositoryInfo from "../../components/RepositoryInfo/RepositoryInfo"

import githubService from '../../api/githubService';
import "./GithubStar.css"

const GithubStar = () => {
  const [userName, setUserName] = useState("");

  const getRepos = async () => {
    console.log("teste");
    const response = await githubService.getStarredRepositories(userName);
    console.log(response);
    return response
  }

  return (
    <div>
      <h1>Github Stars</h1>
      <div className="container">
        <div className="container__left-column">
          <SearchBox disabled={!userName} searchFn={getRepos} setUserName={setUserName}></SearchBox>
        </div>
        <div className="container__right-column">
          <RepositoryInfo></RepositoryInfo>
        </div>
      </div>
    </div>
  )
}

export default GithubStar;
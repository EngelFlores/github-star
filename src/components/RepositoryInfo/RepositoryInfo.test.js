import React from "react";
import { render } from "@testing-library/react";
import RepositoryInfo from "./RepositoryInfo"

test("render repo info", () => {
  const { getByTestId } = render(<RepositoryInfo name="Text" description="Description" owner="owner" starRepo={() => false} checkRepositoryStatus={() => false}/>);
  const repoName = getByTestId("repo-name");
  const repoDescription = getByTestId("repo-description");

  expect(repoName).toBeTruthy();
  expect(repoDescription).toBeTruthy();
});
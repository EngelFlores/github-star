import React from "react";
import { render } from "@testing-library/react";
import UserInfo from "./UserInfo"

test("render search box", () => {
  const { getByTestId } = render(<UserInfo name="Test" bio="Test bio" location="US" email="email" avatar="avatar" url="url"/>);
  const userName = getByTestId("user-name");
  const userBio = getByTestId("user-bio");
  const userLocation = getByTestId("user-location");
  const userEmail = getByTestId("user-email");
  const userUrl = getByTestId("user-url");

  expect(userName).toBeTruthy();
  expect(userBio).toBeTruthy();
  expect(userLocation).toBeTruthy();
  expect(userEmail).toBeTruthy();
  expect(userUrl).toBeTruthy();
});
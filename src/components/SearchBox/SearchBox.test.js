import React from "react";
import { render } from "@testing-library/react";
import SearchBox from "./SearchBox"

test("render search box", () => {
  const { getByTestId } = render(<SearchBox setUserName={() => false} searchFn={() => false} disabled={false}/>);
  const inputLabel = getByTestId("input-label");
  const input = getByTestId("input");
  const button = getByTestId("button");

  expect(inputLabel).toBeTruthy();
  expect(input).toBeTruthy();
  expect(button).toBeTruthy();
  expect(button).not.toBeDisabled();
});
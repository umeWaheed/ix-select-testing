import { describe, expect, test } from "@jest/globals";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/jest-globals";
import Page1 from "../src/Page1";

describe("Models", () => {
  test("Dropdown is shown", async () => {
    await render(<Page1 />);

    const dropdown = screen.getByTestId("dropdown");
    expect(dropdown).toBeInTheDocument();

    let dropdownItems = await screen.getAllByTestId("dropdown-item");

    console.log("items", dropdownItems.length);
    const button = screen.getByTestId("add-btn");
    let newLen;

    await act(() => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      newLen = screen.getAllByTestId("dropdown-item").length;
      console.log(newLen);
    });
    expect(newLen).toBe(dropdownItems.length + 10);
  });
});

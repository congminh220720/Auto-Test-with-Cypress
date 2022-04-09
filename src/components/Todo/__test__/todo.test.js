/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import ToDoList from "..";

describe("todolist component test", () => {
  it("test render todolist component", () => {
    const { getByTestId } = render(<ToDoList />);
    const todolistElement = getByTestId("todolist");
    expect(todolistElement).toBeTruthy();
  });

  it("test render todolist item component", () => {
    const { getByTestId } = render(<ToDoList />);
    const todolistItem = getByTestId("todolist-list");
    expect(todolistItem).toBeTruthy();
  });

  it("test matchers with placeholder", () => {
    const { getByPlaceholderText } = render(<ToDoList />);
    const inputFieldPlaceholderText = getByPlaceholderText("Your to do");
    expect(inputFieldPlaceholderText).toBeTruthy();
  });

  it("Test user fill into input", () => {
    const { getByPlaceholderText } = render(<ToDoList />);
    const inputFieldPlaceholderText = getByPlaceholderText("Your to do");
    userEvent.type(inputFieldPlaceholderText, "Is Good");
    expect(inputFieldPlaceholderText).toHaveValue("Is Good");
  });

  it("check matcher data when use click add todo ", () => {
    const { getByTestId, getByPlaceholderText } = render(<ToDoList />);
    const getBtnAddTodo = getByTestId("add-todo");
    const inputFieldPlaceholderText = getByPlaceholderText("Your to do");
    userEvent.type(inputFieldPlaceholderText, "Is Good");
    userEvent.click(getBtnAddTodo);
    const getTodoItem = getByTestId("todolist-list-0");
    expect(getTodoItem.innerHTML).toMatch(/Is Good/);
  });

  it("check not matcher data when use click clear todo", () => {
    const { getByTestId, getByPlaceholderText } = render(<ToDoList />);
    const getBtnAddTodo = getByTestId("add-todo");
    const inputFieldPlaceholderText = getByPlaceholderText("Your to do");
    userEvent.type(inputFieldPlaceholderText, "Is Good 1");
    userEvent.click(getBtnAddTodo);
    const getTodoItem = getByTestId("todolist-list-0");
    const getbtnClearTodo = getByTestId("todolist-list-btn-0");
    userEvent.click(getbtnClearTodo);
    expect(getTodoItem.innerHTML).toMatch(/Is Good 1/);
  });
});

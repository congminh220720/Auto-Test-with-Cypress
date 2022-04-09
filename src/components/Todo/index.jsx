import { useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";

const Todo = ({ todo, handleClearTodo }) => {
  return (
    <>
      <div className="todolist__list" data-testid="todolist-list">
        {todo?.map((todo, i) => (
          <div key={i} className="todolist-item">
            <span data-testid={`todolist-list-${i}`}>{todo}</span>
            <button
              className="clear"
              data-testid={`todolist-list-btn-${i}`}
              onClick={() => handleClearTodo(i)}
            >
              Clear
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const inputText = useRef();

  const [inputValue, setInputValue] = useState("");
  const [defaultValue, setDefaultValue] = useState("");

  const handleUserInput = (e) => {
    setDefaultValue(e.target.value);
  };

  const handleAddToDo = () => {
    const todolistOld = toDoList;
    setToDoList(todolistOld.concat([inputText.current.value]));
    setDefaultValue("");

    inputText.current.focus();
  };

  const handleClearTodo = (index) => {
    const todolistOld = toDoList;
    setInputValue(todolistOld.splice(index, 1));
    inputText.current.focus();
    setDefaultValue("");
  };

  useEffect(() => {
    inputText.current.focus();
  }, [inputValue]);

  return (
    <>
      <div className="todolist" data-testid="todolist">
        <h2>TO DO LIST</h2>

        <div className="todolist-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Your to do"
              style={{ width: "600px" }}
              ref={inputText}
              onChange={handleUserInput}
              value={defaultValue}
              name="new-item"
              onKeyDown={(e) => (e.key === "Enter" ? handleAddToDo() : "")}
            />
          </Form.Group>

          <Button
            type="submit"
            onClick={handleAddToDo}
            data-testid="add-todo"
            style={{ height: 40 }}
          >
            Submit
          </Button>
        </div>

        <Todo todo={toDoList} handleClearTodo={handleClearTodo} />
      </div>
    </>
  );
}

export default ToDoList;

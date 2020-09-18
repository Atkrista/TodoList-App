import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  function handleClick(value) {
    setTodoList([...todoList, value]);
  }
  return (
    <div>
      <FormComponent handleClick={handleClick} />
      <TodoListComponent
        onDelete={(index) =>
          setTodoList(todoList.filter((item, i) => index !== i))
        }
        todos={todoList}
      />
    </div>
  );
}

function FormComponent(props) {
  const [text, setText] = useState("");
  return (
    <form>
      <label style={{ margin: 10 }}>Enter TODO</label>
      <input type="text/html" onChange={(e) => setText(e.target.value)} />
      <Button
        style={{ marginLeft: 10 }}
        variant="outline-primary"
        onClick={(e) => {
          props.handleClick(text);
          e.preventDefault();
        }}
      >
        Add
      </Button>
    </form>
  );
}

function TodoListComponent(props) {
  let todolist = props.todos || [];
  return (
    <>
      {todolist.map((item, index) => (
        <div style={{ padding: 10 }}>
          <span>{item}</span>
          <Button
            variant="outline-danger"
            onClick={() => props.onDelete(index)}
            style={{ marginLeft: 50 }}
          >
            Delete
          </Button>
          <br />
        </div>
      ))}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

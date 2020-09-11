import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  //when the app loads, we need to listen to db and fetch new todos as they get added/removed
  useEffect(() => {
    //this code here. fires when the app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      }); //imagine a camera, it snap the current event and give it to you
  }, []); //run once when the app load

  const addTodo = (event) => {
    event.preventDefault(); //dont refresh the app when submit
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput(""); //To clear after we create the to do
  };

  return (
    <div className="App">
      <h1>To-Do List App </h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input} //Disable the input button when is empty
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add To Do
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}
//Form is because it works when you hit enter it will submit
export default App;

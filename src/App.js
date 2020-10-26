import React from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";
import TodoList from "./components/TodoList";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 123,
          completed: false,
        },

        {
          task: "Clean bathroom",
          id: 321,
          completed: false,
        },
      ],

      input: "",
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    if(this.state.input.length === 0){
      return; 
    }

    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: this.state.input,
          id: this.state.todos.length + 1,
          completed: false,
        },
      ],
    });


    this.setState({input: ''})
  };

  render() {
    return (
      <div className="App">
        <TodoForm onInputChange={this.onInputChange} input={this.state.input} onFormSubmit={this.onFormSubmit} />
        <TodoList todos={this.state.todos} input={this.state.input} />
      </div>
    );
  }
}

export default App;

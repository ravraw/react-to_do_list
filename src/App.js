import React from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
class App extends React.Component {
  state = {
    inputValue: "",
    todos:[
      {value:"Clean the kichen ", done: false},
      {value:"wash the car", done: true},
  ]
}
changeHandler = (input) => {
  console.log(input);
  this.setState({inputValue:input});
}

submitHandler = (event) =>{
  event.preventDefault();
  const newTodo = {
    value:this.state.inputValue,
    done:false
  };
  const todos = this.state.todos;
  todos.push(newTodo);
  this.setState({
    todos: todos,
    inputValue: ""
  });
  

}
  render (){
    return(
      <div>
        <h1>React To-do App</h1>
        <Form 
          submitHandler = {this.submitHandler}
          inputValue = {this.state.inputValue}
          changeHandler = {this.changeHandler}/>
        <List todos = {this.state.todos} />
      </div>
    )
  };
};
export default App;


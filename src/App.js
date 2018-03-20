import React from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
class App extends React.Component {
  state = {
    inputValue: ""
}
changeHandler = (input) => {
  console.log(input);
  this.setState({inputValue:input});
}
  render (){
    return(
      <div>
        <h1>React To-do App</h1>
        <Form 
          inputValue = {this.state.inputValue}
          changeHandler = {this.changeHandler}/>
        <List />
      </div>
    )
  };
};
export default App;


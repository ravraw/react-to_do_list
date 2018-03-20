import React from "react";
import Header from "./components/header";
import AddTask from "./components/addTask";
import Tasks from "./components/tasks";

class App extends React.Component{

  addTaskhandler = () =>{

  }
  
  render(){
    return(
      <div>
        <Header />
        <AddTask onClick = {this.addTaskhandler}/>
        <Tasks />
      </div>
    )
  };
};
export default App ;
import React from "react";
import Task from "./Task";

class List extends React.Component {
    state = {
        todos:[
            {value:"Clean the kichen ", done: false},
            {value:"wash the car", done: true},
        ]
    }
    render() {
        return(
            <div>
                {this.state.todos.map((todo,index) => {
                    return(
                        <Task 
                            key={index}
                            todo ={todo}  />
                    )
                })}
                
            </div>    
        )
    };
};

export default List ;
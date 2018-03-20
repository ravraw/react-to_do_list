import React from "react";
import Task from "./Task";

class List extends React.Component {
    
    render() {
        return(
            <div>
                {this.props.todos.map((todo,index) => {
                    return(
                        <Task 
                            clickHandler = {this.props.clickHandler}
                            key={index}
                            index ={index}
                            todo ={todo}  />
                    )
                })}
                
            </div> 
        )
    };
};

export default List ;
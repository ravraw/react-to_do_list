import React from "react";

class Task extends React.Component {
   
    render(){
        return(
            <div>
                <span style = {{textDecoration:this.props.todo.done ? "line-through" : "none"}}>
                    {this.props.todo.value}
                </span>
                <button onClick = {() => this.props.clickHandler(this.props.index)}>
                    {this.props.todo.done ? 'Undo' : 'Complete'}
                </button>
            </div>
        )
    };
};

export default Task;
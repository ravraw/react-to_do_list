import React from "react";

const addTask = (props) => {
    return (
        <form onSubmit = {props.onClick}>
            <input type ="text" name = "addTask" placeholder ="Add new task ..."/>
            <button>Add</button>
            
        </form>
    )

};

export default addTask ;
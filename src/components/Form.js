import React from "react";



class Form extends React.Component {
    

    
    render() {
        return(
            <div>
                <form>
                    <input 
                        type = "text" 
                        value ={this.props.inputValue}
                        onChange ={event => this.props.changeHandler(event.target.value)}/>
                </form>    
            </div>    
        )
    };
};

export default Form ;
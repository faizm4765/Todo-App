import React, {Component} from 'react';

class AddTodo extends Component{

    state = {
        task : ''
    }

    handleChange = (e) =>{
        
        this.setState({
            task : e.target.value
        });
        
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
       // console.log(this.state);
       this.setState({
            task : ''
       });
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>Add a new task</label>
                    <input type = "text" onChange = {this.handleChange} value = {this.state.task}></input>
                </form>
            
            </div>
        )
    }


}

export default AddTodo

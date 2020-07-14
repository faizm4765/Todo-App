import React,{Component} from 'react';
import Todos from './todos';
import AddTodo from './addTodo';

class App extends Component{

  state = {
      todos : [
        {id : '1', task : 'buy some milk'},
        {id : '2', task : 'rest and chill'}
      ]

  }
 // console.log(this.state);



 addTodo = (task) => {

  task.id = Math.random();
  //console.log(task); 
  let todos = [...this.state.todos,task];
  //console.log(todos);
  this.setState({
    todos : todos
  });
  console.log(todos);
 }

 deleteTodo = (id) =>{
  const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
  });
  this.setState({     // ye {} must hai/ zaroor daalna
    todos : todos
  }
  );
  
 }

  render(){
    return(
      <div className = "App container">
        <h1 className = "center blue-text"> ToDo's </h1>
        <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/> 
        <AddTodo addTodo = {this.addTodo}/>
      </div>
    
    );
  }

}


export default App;

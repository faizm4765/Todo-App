import React from 'react'

const Todos = ({todos,deleteTodo}) => {    // todos property ka naam hai  jo ki app.js mein diya gya hai.Wahi naam use kr na hai

    // if(todos == null){
    //     console.log("Hi");
    // }
    // console.log(todos);
    const taskList = todos.length ? (
            todos.map(todo => {
                return(
                    <div className = "collection-item" key = {todo.id}>
                        <span onClick = { () => {deleteTodo(todo.id)}}>{todo.task}</span>
                    </div>
                )
            })
    ) : (
        <p className = "center"> You are all done for the day !! Yayyy !!  </p>
    );

    return(
        <div className = "todos collection">
            {taskList}
        </div>

    )
}
export default Todos;

import React, {Component} from 'react'
import Todo from './Todo'

class TodoList extends Component{
    state = {
        'Todo_key' : 1,
        'data' : [
            {
            'key' : 0,
            'contents' : '샘플todo',
            'complete' : false,
            'status' : true
            }
        ],
    }

    render(){
        const listOfTodo = this.state.data.map(el =>{
            return <Todo key={el.key} data={el} />
        });

        return(
        <div className="todoList">{listOfTodo}</div>
        );
    }
}

export default TodoList;
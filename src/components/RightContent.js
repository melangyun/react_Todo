import React, {Component} from 'react'
import TitleArea from './TitleArea'
import TodoList from './TodoList'

class RightContent extends Component{

    addTodo = () => {
        console.log('??살려저')
    }

    render(){
        return(
        <div className = "rightContents">
            <TitleArea addTodo={this.addTodo}/>
            <TodoList />
        </div>
        );
    }
}

export default RightContent;
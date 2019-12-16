import React, {Component} from 'react'

class Todo extends Component{
    render(){
        return(
        <div className="todo">
            <div className="selectBtn"></div>
            <span className="contents">
                {this.props.data.contents}
            </span>
        </div>
        );
    }
}

export default Todo;
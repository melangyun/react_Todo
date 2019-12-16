import React, {Component} from 'react'

class TitleArea extends Component{

    
    render(){
        return(
            <h1 className="title">
                To-do List
                <span className="addTodo" onClick={this.props.addTodo}>+</span>
            </h1>
        );
    }
}

export default TitleArea;
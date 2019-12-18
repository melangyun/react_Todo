import React, {Component} from 'react'
import TitleArea from './TitleArea'
import TodoList from './TodoList'

class RightContent extends Component{
    state = {
        'inputHide' : false
    }

    addTodo = () => {
        this.setState({'inputHide' : true});
    }

    hideInput = () => {
        this.setState({'inputHide' : false});
    }
    
    render(){
        return(
        <div className = "rightContents">
            
            <TitleArea 
                addTodo={this.addTodo}
                renderingGroup = {this.props.renderingGroup}
            />

            <TodoList 
                hideInput={this.hideInput}
                inputHide={this.state.inputHide}
                renderingGroup = {this.props.renderingGroup}
            />
        </div>
        );
    }
}

export default RightContent;
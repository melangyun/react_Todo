import React, {Component} from 'react'
//import dataObj from '../data/totalData';

class Todo extends Component{


    deleteEvent = () => {
        this.props.changeState(this.props.data); 
    }
    
    render(){
        const check = this.props.data.complete;
        const btnStyle = {
            backgroundColor : check ? 'tan' : 'rgb(230,230,230)' 
        };
        const contentStyle = {
            textDecorationLine : check ? 'line-through' : 'none' 
        };

        return(
        <div className="todo">
            <div style = {btnStyle} className="selectBtn" onClick={this.deleteEvent} ></div>
            <span style = {contentStyle} className="contents" onClick={this.deleteEvent}>
                {this.props.data.contents}
            </span>
        </div>
        );
    }
}

export default Todo;
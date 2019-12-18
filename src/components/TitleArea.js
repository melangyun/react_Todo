import React, {Component} from 'react'
import dataObj from '../data/totalData';

class TitleArea extends Component{
    
    render(){
        
        const groupArr = dataObj['groupData'];
        
        let title;
        for( let i = 0 ; i < groupArr.length ; i++)
            if(groupArr[i].GroupKey === this.props.renderingGroup)
                title = groupArr[i].GroupName;
        
        return(
            <h1 className="title">
                To-do List - 
                <span>{title}</span>
                <span className="addTodo" onClick={this.props.addTodo}>+</span>
            </h1>
        );
    }
}

export default TitleArea;
import React, {Component} from 'react'

class Group extends Component{
    
    rerenderingMethod = () => {
        this.props.changeGroup(this.props.data.GroupKey);
    }
    
    render(){
        return(
        <div className="group" onClick={this.rerenderingMethod}>{this.props.data.GroupName}</div>
        );
    }
}

export default Group;
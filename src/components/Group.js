import React, {Component} from 'react'

class Group extends Component{
    render(){
        return(
        <div className="group">{this.props.data.GroupName}</div>
        );
    }
}

export default Group;
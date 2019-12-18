import React, {Component} from 'react'


class GroupPlus extends Component{
    render(){
        return(
            <div className="groupPlus" onClick = {this.props.addGroup} >
                + 목록추가
            </div>
        );
    }
}

export default GroupPlus;
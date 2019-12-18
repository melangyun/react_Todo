import React, {Component} from 'react';
import Group from './Group';
import dataObj from '../data/totalData';

class GroupList extends Component{
    
    changeEvent = (e) => {
    
       if(e.keyCode === 13) {//엔터일때
            const inputValue = e.target.value;
            const newObj = {
                'GroupKey' : dataObj['groupKey']++,
                'GroupName' : inputValue,
                'status' : true
            }
            dataObj['groupData'].push(newObj);
            e.target.value = "";
            this.props.hideNewGoup();
        }

        //esc일때
        if(e.keyCode === 27 && window.confirm("그룹 추가를 취소하시겠습니까?")) this.props.hideNewGoup();
    
    }

    render(){
        const style = {
            display : this.props.inputHide ? 'block' : 'none'
        } 
    
        const listOfGroup = dataObj['groupData'].map(data => {
                return <Group 
                    key={data.GroupKey} 
                    data={data} 
                    changeGroup = {this.props.changeGroup}
                />
            }
        );

        return (
        <div className= "groupList">
            {listOfGroup}
            <div className="group" style = {style}>
            <input type="text" className="newGroup" onKeyUp={this.changeEvent} placeholder="새로운 그룹추가!"/></div>
        </div>
        )
    }

    
    
}

export default GroupList;

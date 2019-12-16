import React, {Component} from 'react'
import Group from './Group'

class GroupList extends Component{
    state = {
        'groupKey' : 1,
        'groupData' : [{
            'GroupKey' : 0,
            'GroupName' : '전체 목록',
            'status' : true
        }]
    }

    render(){
        
        const listOfGroup = this.state.groupData.map(data =>{
            return <Group key={data.GroupKey} data={data} />
        });

        return (
        <div className= "groupList">{listOfGroup}</div>
        )
    }

    
    
}

export default GroupList;

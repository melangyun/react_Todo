import React, {Component} from 'react'
import Search from './Search'
import GroupList from './GroupList'
import GroupPlus from './GroupPlus'

class Nav extends Component {
    render(){
        return(
            <div className="navigation">
                <Search />
                <GroupPlus />
                <GroupList />
            </div>
        );
    }
}

export default Nav;
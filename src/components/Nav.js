import React, {Component} from 'react'
import Search from './Search'
import GroupList from './GroupList'
import GroupPlus from './GroupPlus'

class Nav extends Component {
    state = {
        'inputHide' : false
    }

    addGroup = () => {
       this.setState({'inputHide' : true});     
    }

    hideNewGoup = () => {
        this.setState({'inputHide' : false});
    }

    render(){
        return(
            <div className="navigation">
                <Search />
                <GroupPlus 
                    addGroup = {this.addGroup}
                />
                <GroupList 
                    inputHide = {this.state.inputHide}
                    hideNewGoup = {this.hideNewGoup}
                    changeGroup = {this.props.changeGroup}
                />
            </div>
        );
    }
}

export default Nav;
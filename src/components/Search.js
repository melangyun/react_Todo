import React, {Component, Fragment} from 'react'

class Search extends Component {
    render(){
        return(
            <Fragment>
                <input className="searchInput" type="text" placeholder="검색어를 입력해주세요"/>
            </Fragment>
        );
    }
}

export default Search;
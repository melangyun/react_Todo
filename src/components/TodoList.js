import React, {Component, Fragment} from 'react';
import Todo from './Todo';
import dataObj from '../data/totalData';

class TodoList extends Component{
    state ={
        'satus' : true
    }

    changeState = (data) => {
        const todolist = dataObj['todoData'];
        for(let i = 0 ; i < todolist.length ; i++ ){
            if(data.key === todolist[i].key) todolist[i].complete =  !todolist[i].complete;    
        }
        this.setState({'status' : !this.state});
    }

    handelKeyUp = (e) => {
        //엔터일때
        if(e.keyCode === 13) {
            const inputValue = e.target.value;
            e.target.value = "";
            const newObj = {
                'key' : dataObj['todoKey']++,
                'GroupKey' : this.props.renderingGroup,
                'contents' : inputValue,
                'complete' : false,
                'status' : true
            }
            dataObj['todoData'].push(newObj);
            this.props.hideInput();
        }

        //esc일때
        if(e.keyCode === 27 && window.confirm("할일 작성을 취소하시겠습니까?")) this.props.hideInput();
    }

    render(){
        const style = {
            display : this.props.inputHide ? 'block' : 'none'
        } 

        const listOfTodo = [];
        const todoList = dataObj['todoData'];
        for(let i = 0 ; i < todoList.length ; i++){
            if(this.props.renderingGroup === 0 || this.props.renderingGroup === todoList[i].GroupKey)
                listOfTodo.push( <Todo changeState = {this.changeState} key={todoList[i].key} data={todoList[i]} />);
        }

        return(

            <Fragment>
                {   
                    listOfTodo.length > 0  
                    ? <div className="todoList">{listOfTodo}</div>
                    : <div className="todoList">새로운 메모를 작성해주세요!</div>
                }
                <div style = {style} className="newType_area">
                    <div className="selectBtn" ></div>
                    <input className="newTodo" type="text" onKeyUp={this.handelKeyUp} placeholder="새로운 할 일 입력!"/>
                </div>
            </Fragment>
        );
    }
}

export default TodoList;
/*
import axios from 'axios';
import {url} from '../../api/index';


export const getTodos = () => {
    return (dispatch)=>{
        axios.get(`${url}/task-list/`).then(todos =>{
            dispatch({
                type:"GET_TODOS",
                todos
            });
        }).catch(err =>{
            console.log(err.response);
        })
    }
}
export const addTodo = (todo) =>{
    return (dispatch, getState)=>{
        axios.post(`${url}/task-create/`, todo).then(todo =>{
            dispatch({
               type:"ADD_TODO",
                todo
            });
        }).catch(err =>{
            console.log(err.response);
        })
    }
}*/

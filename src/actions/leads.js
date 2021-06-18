import axios from "axios";
import {GET_LEADS,DELETE_LEADS} from './types';
import {url} from "../api";

//get data

export const getLeads = () => dispatch =>{
    axios.get(`${url}/task-list/`).then(res =>{
        dispatch({
            type:GET_LEADS,
            payload:res.data//la data que mandara el servidor
        });
    }).catch(err =>{
        console.log(err.response);
    })
}

export const deleteLeads = id => dispatch =>{
    axios.delete(`${url}/task-delete/${id}/`).then(res =>{
        dispatch({
            type:DELETE_LEADS,
            payload:id//la data que mandara el servidor
        });
    }).catch(err =>{
        console.log(err.response);
    })
}
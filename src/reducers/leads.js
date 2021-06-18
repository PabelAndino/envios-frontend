import {GET_LEADS,DELETE_LEADS } from '../actions/types';

const initialState = {
    leads:[]
}

export default function (state = initialState,action){
    switch (action.type){
        case GET_LEADS:
            return{
                ...state,
                leads:action.payload//voy a llenar leads
            }

        case DELETE_LEADS:
            return{
                ...state,
                leads:state.leads.filter(lead=>lead.id !== action.payload)//NO DEBE RETORNAR EL QUE ESTOY BORRANDO y quitarlo del UI
            }
        default:
            return state;
    }
}


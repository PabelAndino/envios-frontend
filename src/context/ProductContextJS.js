import React, {createContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
//import {addTodo} from '../store/actions/todoActions';
import {getLeads, deleteLeads} from '../actions/leads';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {

    const dispatch = useDispatch();
    useEffect(()=>{
        props.getLeads();
    },[dispatch])
    const [data,setData] = useState();
    const [details, setDetails] = useState([{
        id:'1',
        title:'FIRST',
        completed:false
    }]);



    const allLeads = useSelector((state) =>state.leads);

    const getLeads = () =>{
        //setDetails(...details,props.leads);
        //props.getLeads();

        console.log(props.leads)
        setDetails(props.leads);
        console.log(allLeads)
    }

    const deleteLead = (id)=>{
        //props.deleteLeads.bind(this,5);
        dispatch(deleteLeads(5));
        console.log('DELETe');
    }

    /*useEffect(()=>{
        props.getLeads();
    },[dispatch]);*/

    const createProduct = (product) => {
        setDetails([...details, product]);
    }

    const hanldeSubmit = () => {
        //dispatch(addTodo(details));
    }

    return (
        <ProductContext.Provider
            value={{
                createProduct,
                hanldeSubmit,
                getLeads,
                deleteLead,
                details
            }}
        >
            {props.children}
        </ProductContext.Provider>
    );
};


ProductContextProvider.propTypes = {
    leads:PropTypes.array
}

const mapState = state => ({//the state of redux
    leads:state.leads.leads//state.leads quiero el lead reducer y el uyltimo lead la parte del state que quiero
});
export default connect(mapState, {getLeads, deleteLeads})(ProductContextProvider);

//export default ProductContextProvider;
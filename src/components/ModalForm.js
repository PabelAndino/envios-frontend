import React, {useContext, useState} from 'react';
import {ProductContext} from '../context/ProductContextJS';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {InputNumber} from 'primereact/inputnumber';


const ModalForm = (props) => {
    const {isVisible,setIsVisible} = props;

    const initialProductState = {
        'title':'',
        'completed':''
    };
    const {createProduct} = useContext(ProductContext);

    const [productData,setProductData]= useState(initialProductState);

    const updateField = (data,field) => {
        setProductData({
            ...productData,[field]:data
        });

    }

    const saveProduct = ()=>{
        createProduct(productData);
        setProductData(initialProductState);
    }
    const dialogFooter = (
        <div className={'ui-dialog-buttonpane p-clearfix'}>
            <Button label={'Delete'} icon={'pi pi-times'}/>
            <Button label={'Save'} icon={'pi pi-check'} onClick={saveProduct}/>

        </div>
    );



    return (
        <div>
            <Dialog visible={isVisible} modal={true} style={{width:'480px'}}
                    contentStyle={{overflow:'visible'}} header={'NUEVA RUTA'}
                    onHide={()=>setIsVisible(false)} footer={dialogFooter}
            >
                <div className={'p-grid p-fluid'}>
                    <br/>

                    <div className={'p-float-label'}>
                        <InputText value={productData.title} onChange={e=>updateField(e.target.value,'title')} />
                        <label >Title:</label>
                    </div>
                    <br/>
                    <div className={'p-float-label'}>
                        <InputText value = {productData.completed} onChange={e=>updateField(e.target.value,'completed')} />
                        <label >Completed:</label>
                    </div>

                    <br/>

                </div>
            </Dialog>
        </div>
    );
};

export default ModalForm;
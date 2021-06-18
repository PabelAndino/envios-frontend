import React, {useContext, useState} from 'react';
import {ProductContext} from "../context/ProductContextJS";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { Button} from 'primereact/button';
import ModalForm from "./ModalForm";

const Todos = () => {
    const {createProduct,hanldeSubmit,getLeads,deleteLead,details} = useContext(ProductContext);
    const [isVisible, setIsVisible] = useState(false);

    const hanldeDelete = ()=>{
        deleteLead(5);
    }

    const footer = (
            <div
                className={'p-clearfix'} style={{width:'100%'}}>
                    <Button
                        style={{float:'left'}}
                        icon = {'pi pi-plus'}
                        label ="Agregar"
                        onClick={()=>setIsVisible(true)}
                    />
                    <Button
                        style={{float:'right'}}
                        icon = {'pi pi-plus'}
                        label ="Guardar"
                        onClick={hanldeDelete}

                    />

                    <Button
                        style={{float:'right'}}
                        icon = {'pi pi-plus'}
                        label ="Cargados"
                        onClick={getLeads}
                    />

            </div>
    );


    const header = (

            <div className="table-header" style={{justifyContent: "center",
                alignItems: "center"}}>
                ENVIOS DE CAMIONES
                {/*<Button icon="pi pi-refresh" />*/}
            </div>
        );

    const getIdFromTable = (id,title,completed)=>{
        console.log("IDE DE LA TABLA",id,title,completed)
        setIsVisible(true);
    }

    const statusBodyTemplate = (rowData, item) => {
        let val
        let status

        if (typeof rowData[item.field] === "boolean") {
            if(rowData[item.field]){
                val = "TRUE";
                status = "qualified";
            } else{
                val = "FALSE";
                status = "unqualified"
            }

        } else {
            val = rowData[item.field];
        }
        return (
            <>

                <span className={`customer-badge status-${status}`}>{val}</span>
                {/*<span className={`customer-badge status-${status}`}>{val}</span>*/}
                {/*<Button type="button" icon="pi pi-plus" className="p-button-primary"></Button>*/}
            </>

        );
    }


    const booleanChecker = (rowData, item) => {
        if (typeof rowData[item.field] === "boolean") {
            return rowData[item.field] ? "TRUE" : "FALSE";
        } else {
            return rowData[item.field];
        }
    };

    return (
        <div>
            <div className="p-grid table-demo">
                <div className="p-col-12">
                    <div className="card">
                        <DataTable
                            className="p-datatable-customers"
                            value={details}
                            header={header}
                            footer={footer}
                            selectionMode={"single"}
                            onSelectionChange={(e) =>getIdFromTable(e.value.id,e.value.title,e.value.completed)}

                        >
                            <Column field={'id'} header={'ID'}/>
                            <Column field={'title'} header={'Title'}/>
                            <Column field={'completed'} body={statusBodyTemplate} header={'Detail'}/>
                            <Column field={'completed'}   header={'Options'}/>

                        </DataTable>
                    </div>
                </div>
            </div>
            <ModalForm isVisible ={isVisible} setIsVisible = {setIsVisible} />
        </div>


    );
};

export default Todos;
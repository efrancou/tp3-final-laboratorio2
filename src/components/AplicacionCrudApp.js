import React,{useState} from "react";
import AplicacionCrudForm from "./AplicacionCrudForm";
import AplicacionCrudTable from "./AplicacionCrudTable";
import "./estilos.css"

const AplicacionCrudApp = () => {
    const [db,setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);    
    const createData =(data)=>{

    };
    const updateData =(data)=>{
        let newData= db.map(el=>el.id ===data.id? data:el);
        setDb(newData);
    };

    const deleteData =(id) => {
        let isDelete = window.confirm(`"Esta seguro que quiere eliminar el participante?`);

        if (isDelete){
            let newData = db.filter((el)=>el.id!==id);
            setDb(newData);
        }else{
            return;
        }
    };

    return(
        <div class="body">
            <AplicacionCrudForm
            createData ={createData}
            updateData ={updateData}
            dataToEdit ={dataToEdit}
            setDataToEdit ={setDataToEdit}
            />
            <AplicacionCrudTable
            data={db}
            deleteData={deleteData} //Actualiza la variable
            setDataToEdit={setDataToEdit} //Actualiza la variable
            />
        </div>
    )
};
export default AplicacionCrudApp;
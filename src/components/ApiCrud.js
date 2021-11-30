import React,{useEffect, useState} from "react";
import { helpHttp } from "../Helpers/helphttp";
import AplicacionCrudForm from "./AplicacionCrudForm";
import AplicacionCrudTable from "./AplicacionCrudTable";
import MessageApi from "./MessageApi";
import "./estilos.css"

const ApiCrud = () => {
    // Se inicializa la base que se va a utilizar
    const [db,setDb] = useState([]);

    const [dataToEdit,setDataToEdit] = useState(null);

    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(false);
    //Se llama helphttp
    let api=helpHttp();
    //Se define el endpoint
    let url= "http://localhost:3000/participantes";

    //Actualizamos la interfaz
    useEffect(()=>{
        //Actualiza la variable setLoading a TRUE
            setLoading(true);
        //Usamos el método GET declarado en helphttp
            helpHttp().get(url).then((res)=>{
                if(!res.err){
                    setDb(res)
                    setError(null);
                }else{
                    setDb(null);
                    setError(res)
                }
        //Actualiza la varible a FALSE nuevamente
            setLoading(false);
            });
            },[url]);
    

    const createData =(data)=>{
        data.id= Date.now(); //Crea el ID en la BD 
        let options={
            body:data,
            headers:{"content-type":"application/json"},
        };
        api.post(url,options).then(res=>{
            console.log(res);
            if(!res.err){
                setDb([...db,res ])
            }else{
                setError(res);
            }
        });
        
        //Trae los datos de la BD

    };
    const updateData =(data)=>{
        let endpoint =`${url}/${data.id}`;
        console.log(endpoint);

        let options={
            body:data,
            headers:{"content-type":"application/json"},
        };
        api.put(endpoint,options).then((res)=>{
            console.log(res);
            if(!res.error){
                let newData= db.map(el=>el.id ===data.id? data:el);
                setDb([...db,res ]);
                setDb(newData);
            }else{
                setError(res)
            }
            
        });
        

    };

    const deleteData = (id) => {
      let isDelete = window.confirm(`¿Estás seguro de eliminar al participante? No podrá modificar el orden posteriormente`);
      if (isDelete) {
          let endpoint = `${url}/${id}`;
          let options = {
          headers: { "content-type": "application/json" },
        };
  
        api.del(endpoint, options).then((res) => {

          if (!res.err) {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
          } else {
            setError(res);
          }
        });
      } else {
        return;
      }
    };
    return(
        <div>
            <h2 class="spacing-top"> Agregar participante </h2>
            <AplicacionCrudForm
            createData = {createData}
            updateData = {updateData}
            dataToEdit = {dataToEdit}
            setDataToEdit={setDataToEdit}
            />
            {loading} 
            {error&& <MessageApi/>}
            <AplicacionCrudTable
            data={db}
            deleteData={deleteData}//Actualiza la variable deleteData
            setDataToEdit={setDataToEdit}//Actualiza la variable setDataToEdit
            />

        </div>
    )

}

export default ApiCrud;
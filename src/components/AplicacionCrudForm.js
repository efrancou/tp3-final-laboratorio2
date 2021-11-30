import React,{useState,useEffect} from "react";

const initialForm = {
    nombre:"",
    apellido:"",
    dni:"",
    id:null,
};

const AplicacionCrudForm =({createData,updateData,dataToEdit,setDataToEdit}) =>{ 
    const [form,setForm]= useState(initialForm);

    useEffect(()=>{//Actualiza el estado del formulario según qué se quiere corregir
        if(dataToEdit){
            setForm(dataToEdit);//Asigna al formulario los datos a corregir
        }else{
            setForm(initialForm);
        }
    },[dataToEdit]);
    //Permite editar los datos 
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    //Si no hay errores, envía los datos a la BD
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!form.nombre||!form.apellido||!form.dni){
            alert ("Los datos están incompletos");
            return;
        }
        if (form.id===null){
            createData(form);
        }else{
            updateData(form);
        }
        handleReset();
    }
    
    //Clear de campos
    const handleReset = (e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    }

    return(
        <div class="spacing-bottom">
            <h3>{dataToEdit? "Corregir":"Agregar"} </h3>
            {/* Formulario que pide los datos para enviarlos a la BD */}
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre del participante" onChange={handleChange} value={form.nombre} class="campos"/>
                <input type="text" name="apellido" placeholder="Apellido del participante" onChange={handleChange} value={form.apellido}class="campos"/>
                <input type="text" name="dni" placeholder="DNI del participante" onChange={handleChange} value={form.dni}class="campos"/>
                <br></br>
                <input type="submit" value="Registrar llegada" class="button"/>
                <input type="reset" value="Limpiar datos" onClick={handleReset} class="button"/>
            </form>
        </div>
    )
};
export default AplicacionCrudForm;
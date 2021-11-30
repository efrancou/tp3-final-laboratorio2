import React from "react";

const AplicacionCrudTableRow = ({el, setDataToEdit,deleteData})=>{
    let {nombre,apellido,dni,id} = el;
    return(
        <tr>
            <td>{nombre}</td>
            <td>{apellido}</td>
            <td>{dni}</td>
            <td>
                <button onClick={()=>setDataToEdit(el)}>Corregir</button>
                <button onClick={()=>deleteData(id)}>Eliminar</button>
            </td>

        </tr>
    );
};
export default AplicacionCrudTableRow;
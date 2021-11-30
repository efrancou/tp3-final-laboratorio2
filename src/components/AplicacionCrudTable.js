import React from "react";
import AplicacionCrudTableRow from "./AplicacionCrudTableRow";
import "./estilos.css"

const AplicacionCrudTable = ({data, setDataToEdit, deleteData}) => {
    return(
        <div class="resultados">
            <h2>Ranking de participantes</h2>
            <table class="tabla-resultados">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                
                <tbody>
                    {(data.length ===0) ? <tr><td colSpan="3">Aún no han llegado participantes</td></tr>:(data.map((el)=> <AplicacionCrudTableRow 
                    key={el.id} el={el}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData} 
                    />))}
                </tbody>
            </table>
        </div>
    )
};
export default AplicacionCrudTable;
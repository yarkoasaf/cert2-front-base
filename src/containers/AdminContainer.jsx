import React, { use, useEffect, useRef, useState} from "react"
import BaseToolbar from "../components/BaseToolbar"
import CineForm from "../components/CineForm"
import CineTable from "../components/CineTable"
import { Toast } from 'primereact/toast';
import { createEntrada, getEntradas } from "../services/CineService";


/* 
dos formularios (comprar entradas y entradas compradas)

dia, dropdown
tipo de pago, selectbutton

datatable (dia, pelicula, cantidad de entradas, valor a pagar)

*/

const AdminContainer = () => {
    const toast = useRef(null);

    const [entradas, setEntradas] = useState([]);

    useEffect(() => {
        setEntradas(getEntradas());
    }, []);

    const handleCreateEntrada = (entrada) => {

        if(entrada.ciudad.trim() === '' || entrada.pelicula == null || entrada.dia == null || entrada.cantidad < 1 || entrada.pago == null){
            toast.current.show({severity:'error', summary: 'Error en la compra', detail:'Por favor complete todos los campos correctamente', life: 3000});
            return;
        }
        createEntrada(entrada);
        setEntradas(getEntradas());
        toast.current.show({severity:'success', summary: 'Compra exitosa', detail:'La entrada se ha comprado correctamente', life: 3000});
    }

    return (
        <>
            <Toast ref={toast}></Toast>
            <BaseToolbar></BaseToolbar>
            <div className="row mt-4">
                <div className="col">
                    <div className="row">
                        <div className="col mb-3">
                            <CineForm onCreateEntrada={handleCreateEntrada}></CineForm>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-3">
                            <CineTable entradas={entradas}></CineTable>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminContainer
import React, { useEffect, useRef, useState} from "react"
import BaseToolbar from "../components/BaseToolbar"
import Template from "../components/Template"
import { Toast } from "primereact/toast"

/* 
dos formularios (comprar entradas y entradas compradas)

dia, dropdown
tipo de pago, selectbutton

datatable (dia, pelicula, cantidad de entradas, valor a pagar)

*/

const AdminContainer = () => {
    const toast = useRef(null);

    return (
        <>
            <Toast ref={toast}></Toast>
            <BaseToolbar></BaseToolbar>
            <div className="row mt-4">
                <div className="col">
                    <div className="row">
                        <div className="col mb-3">
                            <Template></Template>
                        </div>
                        <div className="col mb-3">
                            <Template></Template>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-3">
                            <Template></Template>
                        </div>
                        <div className="col mb-3">
                            <Template></Template>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminContainer
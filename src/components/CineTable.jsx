import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function CineTable({entradas}) {

    return  (
        <DataTable value={entradas}>
            <Column field="dia" header="Día"></Column>
            <Column field="pelicula.titulo" header="Película"></Column>
            <Column field="cantidad" header="Cantidad de entradas"></Column>
            <Column field="valor" header="Valor a pagar"></Column>
        </DataTable>
    )
}

export default CineTable;

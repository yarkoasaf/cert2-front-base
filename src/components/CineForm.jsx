import React, {useState} from "react";
import { Panel } from "primereact/panel";
import { Dropdown } from "primereact/dropdown";
import { SelectButton } from "primereact/selectbutton";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { ListBox } from "primereact/listbox";
import { Button } from "primereact/button";

/*
día, dropdown (Lunes a Viernes) ✔
Tipo de Pago, selectbutton (Efectivo, tarjeta) ✔
Cantidad de entradas, InputNumber (min 1, valor entero) 
Ciudad, InputText (obligatorio)
Pelicula, ListBox (Wifi Ralph, Dragon Ball Super Broly, Cascanueces, El Grinch)
*/



//=============================================================================================//

function CineForm({onCreateEntrada= (entrada) => {} }) {

    const [dia, setDia] = useState(null);
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

    const pagos = ['Efectivo', 'Tarjeta'];
    const [pago, setPago] = useState(pagos[0]);

    const [cantidad, setCantidad] = useState(1);

    const [ciudad, setCiudad] = useState('');

    const [pelicula, setPelicula] = useState(null);
    // (Wifi Ralph, Dragon Ball Super Broly, Cascanueces, El Grinch)
    const peliculas = ["Wifi Ralph", "Dragon Ball Super Broly", "Cascanueces", "El Grinch"];

    const handleClick = ()=>{
        const entrada = {dia: dia, pago: pago, cantidad: cantidad, ciudad: ciudad, pelicula: pelicula};
        onCreateEntrada(entrada);
    };

    return  (
        <Panel header='Comprar entrada' >
            <div className="border p-3">
                <label htmlFor="Dia" className="mb-1">Seleccione día: </label>
                <Dropdown value={dia} onChange={(e) => setDia(e.value)} options={dias} optionLabel="dia"
                placeholder="Selecciona el día"/>
            </div>
            <div className="border p-3">
                <label htmlFor="TipoPago" className="mb-1">Tipo de pago: </label>
                <SelectButton value={pago} onChange={(e) => setPago(e.value)} options={pagos} />
            </div>
            <div className="border p-3">
                <label htmlFor="Entradas" className="mb-1">Cantidad de entradas: </label>
                <InputNumber inputId="cantidad-entradas" value={cantidad} onValueChange={(e) => setCantidad(e.value)} min={1} maxFractionDigits={0}/>
            </div>
            <div className="border p-3">
                <label htmlFor="ciudad" className="mb-1">Ciudad: </label>
                <InputText value={ciudad} onChange={(e) => setCiudad(e.target.value)} required />
            </div>
            <div className="border p-3">
                <label htmlFor="pelicula" className="mb-1">Seleccione película: </label>
                <ListBox value={pelicula} onChange={(e) => setPelicula(e.value)} options={peliculas} optionLabel="titulo" className="w-full md:w-14rem" />
            </div>
            <div className="border p-3">
                <Button label="Confirmar Compra" onClick={handleClick}></Button>
            </div>

        </Panel>
    )
}

export default CineForm;
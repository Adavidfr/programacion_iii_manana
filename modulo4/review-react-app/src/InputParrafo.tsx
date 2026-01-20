import { useState } from "react";

export function InputParrafo() {
    const [texto, setTexto ] = useState("");

    return (
        <div>
            <input
            value = { texto }
            placeholder= "Ingrese texto ...."
            onChange = {(e)=>setTexto(e.target.value)} 
            />
            <p>{texto || '......'}</p>


        </div >

    )


}
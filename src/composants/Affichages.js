import { useState } from "react"



function Affichages(){

    const [value, setValue] = useState(0)
    const [show, setShow] = useState(false)
    const montant = 10

    return show ? (
        <div>
            <p onClick={()=>{
                setShow(false)
            }}>Cachez</p>

            <h1>montant : {montant}</h1>
            <button onClick={()=>{
                setValue(value+1)
            }}>Ajouter</button>

            <p>La somme vaut : {value * montant}</p>

            <button onClick={()=>{
                setValue(0)
            }}>Vider</button>
        </div>
    ) : <div>
            <p onClick={()=>{
                setShow(true)
            }}>Afficher</p>
        </div>
}

export default Affichages
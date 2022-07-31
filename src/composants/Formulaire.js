import { useState } from "react"

function Form(e){
    e.preventDefault()
    alert(
        e.target['prenom'].value + " " +e.target['nom'].value
    )
}

function Formulaire(){
    return(
        <div>
            <form onSubmit={Form}>
                <input type="text" name="nom" placeholder="Entrer votre nom!"/>
                <input type="text" name="prenom" placeholder="Entrer votre prenom!"/>
                <button type="submit">Entrer</button>
            </form>
        </div>
    )
}


export default Formulaire
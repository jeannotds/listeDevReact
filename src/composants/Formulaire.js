import { useState } from "react"
import '../styles/Formulaire.css'


//FORMULAIRE NON CONTROLE
function Form(e){
    e.preventDefault()
    alert(
        e.target['prenom'].value + " " +e.target['nom'].value
    )
}


function Formulaire(){
    // const [inputValues, setInputValue] = useState('Posez votre question ici')
    const [inputValue, setValue] = useState()

    return(
        <div className="container">
            <h1>FORMULAIRE NON CONTROLE</h1>
            <form onSubmit={Form} className="cont-1">
               <div className="formNomnCont">
                    <input type="text" name="nom" placeholder="Entrer votre nom!"/>
                    <input type="text" name="prenom" placeholder="Entrer votre prenom!"/>
                    <button type="submit">Entrer</button>
               </div>
            </form>

            <h1>FORMULAIRE CONTROLE</h1>
           <div className="cont-1">
                <div className="formNomnCont">
                        <textarea value={inputValue}
                            onChange={(e)=>{
                                setValue(e.target.value)
                            }}
                        />
                        <button
                            onClick={()=>{
                                alert(inputValue)
                            }}
                        >Submit</button>
                    </div>
           </div>

        </div>
    )
}

export default Formulaire
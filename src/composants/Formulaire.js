import { useState } from "react"


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
        <div>
            {/* //FORMULAIRE NON CONTROLE */}
            <form onSubmit={Form} className="formNomnCont">
                <input type="text" name="nom" placeholder="Entrer votre nom!"/>
                <input type="text" name="prenom" placeholder="Entrer votre prenom!"/>
                <button type="submit">Entrer</button>
            </form>


            {/* //FORMULAIRE CONTROLE */}
            <div>
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
    )
}

export default Formulaire
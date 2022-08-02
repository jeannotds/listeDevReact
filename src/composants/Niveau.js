import { apprenantsList } from "../datas/apprenantsBD"


function Niveau({type, valeur}){

    const maCategorie = {
        1: 'Junior',
        2: 'Intermediare',
        3: 'Senior'
    }

    function Action(){
        alert(`Vous etes au categorie ${maCategorie[valeur]}. ${valeur === 3 ? 'Felicitation!':
                                'Travaillez encore!'}`)
    }
    
    const myType = type === 'niveau' ? '☀️' : null
    const range =[1, 2, 3]
    
    return(
       <div onClick={()=>{
        Action()
       }}>
            {range.map((rangeElem)=>(
                valeur >= rangeElem ? <span key={rangeElem.toString()}>{myType}</span> : null
            ))}
       </div>
    )

}
export default Niveau













/*
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
function Niveau({type, valeurEl}){

    const myType = type === 'niveau' ? '☀️' : '💧'

    const niveaux = [1, 2, 3, 4, 5]

    return(
        <div>
            {niveaux.map((niveauElem)=>(
                valeurEl => niveauElem ? <sapn key={niveauElem.toString()}>{myType}</sapn> : null
            ))}
        </div>
    )
}
*/
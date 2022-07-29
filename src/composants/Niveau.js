import { apprenantsList } from "../datas/apprenantsBD"



function Niveau({type, valeur}){
    
    const myType = type === 'niveau' ? '☀️' : '💧'
    const range =[1, 2, 3]

    return(
        <div className="niveau-div">Niv:
           {range.map((rangeElem)=>(
                valeur >= rangeElem ? <span className="niveau" key={rangeElem.toString()}>{myType}</span>:null
           ))}
        </div>
    )

}
export default Niveau

// function Niveau({type, valeurEl}){

//     const myType = type === 'niveau' ? '☀️' : '💧'

//     const niveaux = [1, 2, 3, 4, 5]

//     return(
//         <div>
//             {niveaux.map((niveauElem)=>(
//                 valeurEl => niveauElem ? <sapn key={niveauElem.toString()}>{myType}</sapn> : null
//             ))}
//         </div>
//     )
// }

import '../styles/ListItem.css'
import Niveau from './Niveau'

function ListItem({id, nom, prenom, categorie, age, image, niveau}){
    
    return(
        <div>
            <li key={id} className="image-li">
                <img src={image} alt="" className="img-list"/>
                <div>Noms : {nom} {prenom}</div>
                <div>{`Age : ${age} ans`}</div>
                <div>Demain : {categorie}</div>
               <div className='categorie'>Categorie 
                    <Niveau type='niveau' valeur={niveau}/>
               </div>
            </li>
        </div>
    )
}


export default ListItem
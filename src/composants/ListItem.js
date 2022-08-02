import '../styles/ListItem.css'
import Niveau from './Niveau'

function showPlant(nom, prenom){

    alert(`Voulez-vous voir les informations sur ${nom +' '+ prenom} ?` )

}


function ListItem({id, nom, prenom, categorie, age, image, niveau}){
    
    return(
        <div>
            <li key={id} className="image-li" onClick={function(){
                showPlant(nom, prenom)
            }}>
                <img src={image} alt="" className="img-list"/>
                <div>Noms : {nom} {prenom}</div>
                <div>{`Age : ${age} ans`}</div>
                <div>Demain : {categorie}</div>
                <Niveau type='niveau' valeur={niveau}/>
            </li>
        </div>
    )
}


export default ListItem
import '../styles/ListItem.css'


function ListItem({id, nom, prenom, categorie, age, image}){
    
    return(
        <div>
            <li key={id} className="image-li">
                <img src={image} alt="" className="img-list"/>
                <div>Noms : {nom} {prenom}</div>
                <div>{`Age : ${age} ans`}</div>
                <div>Categorie : {categorie}</div>
            </li>
            <div></div>
        </div>
    )
}


export default ListItem
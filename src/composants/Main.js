import '../styles/Main.css'
import Person from '../img/womentech.jpg'
import { apprenantsList } from '../datas/apprenantsBD'
import Periode from '../styles/Periode'
import ListItem from './ListItem'

function Main({children, cart, updateCart}){

    const listApp = apprenantsList.reduce((acc, list)=>
        acc.includes(list.categorie) ? acc : acc.concat(list.categorie), []
    )


    return(
        <main className="main">
            {/* <div className='background'></div> */}
            {children}
            
                <Periode />

            <ul>
                {listApp.map((list)=>(
                    <li key={list}>{list}</li>
                    
                ))}
            </ul>
            

            <ul className='list-ul'>
                {apprenantsList.map(({id, nom, prenom, categorie, age, image, niveau})=>(
                    <div key={id}>
                        <ListItem
                            key={id}
                            id={id}
                            nom={nom}
                            prenom={prenom}
                            categorie={categorie}
                            age={age}
                            image={image}
                            niveau={niveau}
                        />
                        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>            
                    </div>
                    
                ))}
                
            </ul>
        </main>
    )
}

export default Main
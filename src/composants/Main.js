import '../styles/Main.css'
import Person from '../img/womentech.jpg'
import { apprenantsList } from '../datas/apprenantsBD'
import Periode from '../styles/Periode'
import Niveau from './Niveau'


function Main({children}){

    const listApp = apprenantsList.reduce((acc, list)=>
        acc.includes(list.categorie) ? acc : acc.concat(list.categorie), []
    )


    return(
        <main className="main">
            {/* <div className='background'></div> */}
            {children}

            <div className='div-img'>
                <img  src={Person} alt='portfolio' className='wamentech'/>
                <Periode />
            </div>

            <ul className='liste-categorie'>
                {listApp.map((list)=>(
                    <li key={list}>{list}</li>
                ))}
            </ul>

            <ul className='ul-liste'>
                {apprenantsList.map((list)=>(
                    <li key={list.id} className='liste'>
                        {list.finish ? <div className='finish'>Deja fini(e)</div> : null}
                        {list.nom }<br/>{list.prenom}

                        {/* <Niveau type='niveau' valeurEl={list.niveau} /> */}
                        <Niveau type='niveau' valeur={list.niveau}/>

                    </li>
                ))}
            </ul>

        </main>
    )
}

export default Main
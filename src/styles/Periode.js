import '../styles/Periode.css'

function Periode(){

    const dateFormation = new Date().getMonth()

    const intervalForm = dateFormation >= 4 && dateFormation <= 12

    if(intervalForm){
        return (<div className="periode">Periode de la formation</div>)
    }else{
        return (<div className="periode">Periode de selection des apprenants</div>)
    }

}

export default Periode
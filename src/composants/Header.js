import '../styles/Header.css'


function Header(){
    return (
        <header className="header">
            <h1 className="title-logo">Portfolio<span>.</span></h1>
            <nav className="nav-bar">
                <a href="#" className="menu-link accueil active">Accueil</a>
                <a href="#" className="menu-link aprpos">A prpos</a>
                <a href="#" className="menu-link experiences">Experiences</a>
                <a href="#" className="menu-link contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header
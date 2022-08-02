import Header from "./Header";
import Main from "./Main";
import Formulaire from "./Formulaire";
import Affichages from "./Affichages";

function App() {
  return (
    <div className="App">
        <Header />
        <Main>
            <div className='background'></div>
            <Affichages />
        </Main>
        <Formulaire />
    </div>
  );
}

export default App;

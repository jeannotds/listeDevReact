import Header from "./Header";
import Main from "./Main";
import Formulaire from "./Formulaire";

function App() {
  return (
    <div className="App">
        <Header />
        <Main>
            <div className='background'></div>
        </Main>
        <Formulaire />
    </div>
  );
}

export default App;

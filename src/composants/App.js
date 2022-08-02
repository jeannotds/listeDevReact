import Header from "./Header";
import Main from "./Main";
import Formulaire from "./Formulaire";
import Cart from "./Cart";
import { useState } from "react";

function App() {
  // const [valeur, setValeur] = useState([])
  const [cart, updateCart] = useState([])
  return (
    <div className="App">
        <Header />
        <div>
          {/* <Cart valeur={valeur} setValeur={setValeur}/> */}
          <Cart cart={cart} updateCart={updateCart} />
          <Main cart={cart} updateCart={updateCart} >
              <div className='background'></div>
          </Main>
        </div>
        
        <Formulaire />
    </div>
  );
}

export default App;

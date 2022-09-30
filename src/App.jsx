import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Pokedex from "./components/Pokedex";
import PokemonDetail from "./components/PokemonDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";
import "./styles.css";

function App() {
  return (
    <HashRouter>
        <div className="App">
           <Routes>
                <Route path="/" element={<Login/>}/>

                <Route element={<ProtectedRoutes/>}>
                    <Route path="/pokedex" element={<Pokedex/>}/>
                    <Route path="/pokedex/:id" element={<PokemonDetail/>}/>
                </Route>
            </Routes>
        </div>
   </HashRouter>
  );
}

export default App;
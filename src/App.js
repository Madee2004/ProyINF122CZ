import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {Colegio} from './components/Colegio';
import {Historia} from './components/Historia';
import {Inicio} from './components/Inicio';
import {NavBar} from './layoutts/NavBar';
import Footer from "./components/Footer";
import {Admisiones} from './components/Admisiones';
import {Uniforme} from './components/Uniforme';
import {ProgramasA} from './components/ProgramasA';
import {Eventos} from './components/Eventos';
import {Infraestructura} from './components/Infraestructura';
import {Nochetalentos} from './components/Nochetalentos';
import {Contacto} from './components/Contacto';
import {Cred} from './components/Cred';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Inicio />} />
            <Route path='Historia' element={<Historia />} />
            <Route path='Colegio' element={<Colegio />} />
            <Route path='Admisiones' element={<Admisiones />} />
            <Route path='Uniforme' element={<Uniforme />} />
            <Route path='ProgramasA' element={<ProgramasA />} />
            <Route path='Eventos' element={<Eventos />} />
            <Route path='Infraestructura' element={<Infraestructura />} />
            <Route path='Nochetalentos' element={<Nochetalentos />} />
            <Route path='Contacto' element={<Contacto />} />
            <Route path='Cred' element={<Cred />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div className="content-wrap">
      <Footer />
      </div>

    </div>
    
  );
}

export default App;

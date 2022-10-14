// import './App.css';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';


// import Header from './components/header/Header';
// import Filters from './components/filters/Filters';
// import FiltrosNav from './components/filtros-nav/FitrosNav';
// import ResultsTop from './components/results-top/ResultsTop';
// import AnunciosList from './components/anuncios-list/AnunciosList';

import { Route, Routes } from 'react-router-dom';
import Cadastro1 from './pages/cadastro-olx-self/Cadastro1';
import Cadastro2 from './pages/cadastro-olx-self/Cadastro2';
import Cadastro3 from './pages/cadastro-olx-self/Cadastro3';
import Cadastro4 from './pages/cadastro-olx-self/Cadastro4';
import Searching from './pages/searching/Searching';

function App() {
  return (
    // <div className="App">
    //   <Header/>
    //   <main>
    //     <Filters/>
    //     <div className="results">
    //       <FiltrosNav/>
    //       <ResultsTop/>
    //       <AnunciosList/>
    //     </div>
    //   </main>
    // </div>
    <Routes>
      <Route path='/' element={<Searching/>}/>
      <Route path='/cadastro/1' element={<Cadastro1/>}/>
      <Route path='/cadastro/2' element={<Cadastro2/>}/>
      <Route path='/cadastro/3' element={<Cadastro3/>}/>
      <Route path='/cadastro/4' element={<Cadastro4/>}/>
    </Routes>
  );
}

export default App;

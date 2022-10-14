import './Searching.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import Header from '../../components/header/Header';
import Filters from '../../components/filters/Filters';
import FiltrosNav from '../../components/filtros-nav/FitrosNav';
import ResultsTop from '../../components/results-top/ResultsTop';
import AnunciosList from '../../components/anuncios-list/AnunciosList';

function Searching() {
  return (
    <div className="SearchingMain">
      <Header />
      <main className="mainContent">
        <Filters />
        <div className="results">
          <FiltrosNav />
          <ResultsTop />
          <AnunciosList />
        </div>
      </main>
    </div>
  );
}

export default Searching;

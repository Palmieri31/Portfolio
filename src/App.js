import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Tecnologies from './components/Tecnologies/Tecnologies';

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <AboutMe />
      <Tecnologies />
      <Portfolio />
    </div>
  );
}

export default App;

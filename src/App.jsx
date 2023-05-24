
import './App.css';
import './globals/styles.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer texto="¡Welcome to our Store!"/>
    </>
  )
}

export default App;

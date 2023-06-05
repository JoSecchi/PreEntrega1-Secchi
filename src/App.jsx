
import './App.css';
import './globals/styles.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer greeting="¡Welcome to our Store!"/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;

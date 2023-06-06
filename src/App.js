import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import AddItem from './components/AddItem';
import ItemList from './components/ItemsList';

function App() {
  return (
    <div className="mx-auto p-2" style={{width: '50vw'}}>
      <AddItem />
      <ItemList />
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header';

function App() {
  const name = "Sara"
  const lastname = "Brizendine"
  return (
    <div className="App">
      <Header name={name} lastname={lastname}/>
    </div>
  );
}

export default App;

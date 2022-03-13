import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

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

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const name = "Sara"
  const lastname = "Brizendine"

  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div className="App">
      <Header name={name} lastname={lastname}/>
      <About />
      <Footer />
    </div>
  );
}

export default App;

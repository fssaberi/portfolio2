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

  const [page, setPage] = useState("About Me");

  function renderPage(page) {
    if (page === "About Me") {
      return <About />
    }
    if (page === "Projects") {
      return <Project />
    }
    if (page === "Contact") {
      return <ContactForm />
    }
  }

  return (
    <div className="App">
      <Header name={name} lastname={lastname} setPage={setPage} page={page}/>
      {renderPage(page)}
      <Footer />
    </div>
  );
}

export default App;

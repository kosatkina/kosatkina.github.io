// React Hook
import { Fragment } from 'react';

// Custom components
import Header from "./components/Header.jsx";
import TabButton from './components/TabButton.jsx';


import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="resume">
          <menu>
          <TabButton>Highlights</TabButton>
          <TabButton>Resume</TabButton>
          <TabButton>Personal Projects</TabButton>
          <TabButton>Contact Info</TabButton>
          </menu>
        </section>
      </main>
    </>
  );
}

export default App;

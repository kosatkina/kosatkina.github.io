// React Hook
import { useState, Fragment } from "react";

// Custom components
import Navbar from "./components/navbar.jsx";
import Header from "./components/Header.jsx";
import TabButton from "./components/TabButton.jsx";

import { MENU } from "./data.js";

import "./App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  // Call react hook to use state
  const [selectedBtn, setSelectedBtn] = useState();
  
  // Function to highlight selected menu button
  function handleSelectedBtn(selectedBtn) {
    setSelectedBtn(selectedBtn);
  }

  return (
    <Fragment>
      <Navbar />
      <Header />
      <main>
        <section id="menu">
          <menu>
          <TabButton isSelected={selectedBtn === 'highlights'}
                    onSelect={function() {handleSelectedBtn('highlights')}}>Highlights</TabButton>
          <TabButton isSelected={selectedBtn === 'education'}
                    onSelect={function() {handleSelectedBtn('education')}}>Education</TabButton>
          <TabButton isSelected={selectedBtn === 'skills'}
                    onSelect={function() {handleSelectedBtn('skills')}}>Technical Skills</TabButton>
          <TabButton isSelected={selectedBtn === 'projects'}
                    onSelect={function() {handleSelectedBtn('projects')}}>Project Work</TabButton>
          <TabButton isSelected={selectedBtn === 'experience'}
                    onSelect={function() {handleSelectedBtn('experience')}}>Relevant Experience</TabButton>
          </menu>
          {!selectedBtn ? <p>Please select a button to learn more about me...</p> : null} 
          {selectedBtn ? (
            <div id="tab_content">
              <h3>{MENU[selectedBtn].title}</h3>
              <ul className="description-list">
                {MENU[selectedBtn].description.map((item, index) => (
                  <div key={index} className="item">
                    <h5>{item.heading}</h5>
                    <ul>
                      {item.subpoints.map((point, subIndex) => (
                        <li key={subIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      </main>
    </Fragment>
  );
}

export default App;

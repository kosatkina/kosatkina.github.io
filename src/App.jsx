// React Hook
import { useState, Fragment } from "react";

// Custom components
import Header from "./components/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { MENU } from "./data.js";
console.log(MENU);

import "./App.css";

function App() {
  // Call react hook to use state
  const [selectedBtn, setSelectedBtn] = useState();
  
  // Function to highlight selected menu button
  function handleSelectedBtn(selectedBtn) {
    setSelectedBtn(selectedBtn);
  }

  return (
    <Fragment>
      <Header />
      <main>
        <section id="menu">
          <menu>
          <TabButton isSelected={selectedBtn === 'highlights'}
                    onSelect={function() {handleSelectedBtn('highlights')}}>Highlights</TabButton>
          <TabButton isSelected={selectedBtn === 'resume'}
                    onSelect={function() {handleSelectedBtn('resume')}}>Resume</TabButton>
          <TabButton isSelected={selectedBtn === 'projects'}
                    onSelect={function() {handleSelectedBtn('projects')}}>Personal Projects</TabButton>
          <TabButton isSelected={selectedBtn === 'contact'}
                    onSelect={function() {handleSelectedBtn('contact')}}>Contact Info</TabButton>
          </menu>
          {!selectedBtn ? <p>Please select a button to learn more about me...</p> : null} 
          {selectedBtn ? (
            <div id="tab_content">
              <h3>{MENU[selectedBtn].title}</h3>
              <p>{MENU[selectedBtn].description}</p>
            </div>
          ) : null}
        </section>
      </main>
    </Fragment>
  );
}

export default App;

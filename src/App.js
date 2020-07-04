import React from 'react';
import './App.css';
import ColorPicker from './colorPicker';
function App() {

  function colorSelected(value) {
    console.log(value);
    const playground =  document.querySelector('.header-playground');
    playground.style.backgroundColor = value;
    const hexCode =  document.querySelector('#hex-code');
    hexCode.textContent = `Selected hex code is ${value}`
};
  return (
    <div className="App">
      <header className="App-header">
      <a
        className="App-link"
        href="https://github.com/TanmayBiswas22/react-color-picker"
        target="_blank"
        rel="noopener noreferrer"
        > Github Link</a>
        <br />
      <ColorPicker
                                        height="50px"
                                        width="100px"
                                        defaultColor="red"
                                        handleSelectedColor={colorSelected}
                                    />
        <p>
         Pick a color to get the hex code
        </p>
        <p id="hex-code" />
      </header>
      <header className="header-playground" />
    </div>
  );
}

export default App;

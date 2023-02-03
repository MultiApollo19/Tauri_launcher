import logo from './logo.svg';
import './App.css';
import { appWindow } from '@tauri-apps/api/window'
import { useState, useEffect } from 'react'
import Update from './Components/update';


function App() {
  return (
    <div className="App">
      <div data-tauri-drag-region class="titlebar">
        <div class="titlebar-logo" id="titlebar-icon">
          <img
            src="/Assets/Taskbar/icon_logo.png"
            alt="minimize"
          />
          <div class="titlebar-logo" id="titlebar-title">Launcher</div>
        </div>
        <div class="titlebar-button" id="titlebar-minimize" onClick={() => appWindow.minimize()}>
          <img
            src="/Assets/Taskbar/icon_minus.png"
            alt="minimize"
          />
        </div>
        <div class="titlebar-button" id="titlebar-maximize">
          <img
            src="/Assets/Taskbar/icon_square.png"
            alt="maximize"
          />
        </div>
        <div class="titlebar-button" id="titlebar-close" onClick={() => appWindow.close()}>
          <img src="/Assets/Taskbar/icon_close.png" alt="close" />
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  );
}

export default App;

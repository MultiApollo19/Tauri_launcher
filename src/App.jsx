import logo from './logo.svg';
import './App.css';
import { appWindow } from '@tauri-apps/api/window'
import { getVersion } from '@tauri-apps/api/app';
import { supabase } from './Components/supabase';
import { useState, useEffect } from 'react'

function App() {
  const [appVer, setappVer] = useState(true)
  const [appUpdateChceck, setAppCheck] = useState(true)

  /*useEffect(() => {
    setAppCheck(false)
    checkVersion()
  })*/

  


  const checkVersion = async () => {
      try {
        setAppCheck(true);
        const promGetVersion = Promise.resolve(getVersion());
        promGetVersion.then((value) => {
          setappVer(value);
        })
        let { data, error } = await supabase.from('launcher').select('version');
        console.log(appVer === data[0].version);
        //console.log(supabase.storage.from('launcher').getPublicUrl('0.1.1/launcher.zip').data.publicUrl)
        /*console.log(data[0].version);
        
        console.log(appVersion);
        console.log(error);*/
      } catch (error) {
        alert(error.message)
      } finally {
        setAppCheck(false);
      }


  }

  checkVersion()


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

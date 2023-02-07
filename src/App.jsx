import './App.css';
import Content from './Components/content';
import Titlebar from './Components/titlebar';
import { useState, useEffect } from 'react'
import UpdateWindow from './Components/updateWindow';
import { removeFile, BaseDirectory } from '@tauri-apps/api/fs';


function App() {
  const [isUpdate, setUpdate] = useState(true);
  const [updateVer, setUpdateVer] = useState('');
  const [updateChangelog, setUpdateChangelog] = useState('');
  const [updateAt, setUpdateAt] = useState('');


  useEffect(()=>{
    cleanupUpdate();
  },[])
  const cleanupUpdate = async () =>{
    await removeFile('launcher_old.exe', { dir: BaseDirectory.Resource });
  }
  return (
    <div className="App bg-[#0E111D]">
      {isUpdate ?
        <div>
          <Titlebar isUpdate={setUpdate} updateVer={setUpdateVer} updateChangelog={setUpdateChangelog} updateAt={setUpdateAt} />
          <Content />
        </div>
        :
        <div>
          <UpdateWindow isUpdate={setUpdate} updateVer={updateVer} updateChangelog={updateChangelog} updateAt={updateAt} />


          <div className='blur'>
            <Titlebar />
            <Content />
          </div>
        </div>
      }

    </div>

  );
}

export default App;

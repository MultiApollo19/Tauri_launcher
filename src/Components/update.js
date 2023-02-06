import { getVersion } from '@tauri-apps/api/app';
import { supabase } from './supabase';
import { useState, useEffect } from 'react'
import { writeBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';


function Update() {
  const [appVer, setappVer] = useState('');
  const [localVer, setlocalVer] = useState('');

  useEffect(() => {
    checkUpdate();
  }, [])

  const checkUpdate = ()=>{
    console.log('LECIM')
    supaCheckVersion();
    console.log('LECIM 2' + appVer)
    localCheckVersion();
    console.log('LECIM 3' + localVer)
    if(appVer !== localVer){
      console.log('LECIM 4')
      console.log(appVer)
      console.log(localVer)
      downloadUpdate();
    }
  }


  const supaCheckVersion = async () => {
    let { data } = await supabase.from('updates').select('version');
    setappVer(data[0].version);
  }
  const localCheckVersion = () => {
    const promGetVersion = Promise.resolve(getVersion());
    promGetVersion.then((value) => {
      setlocalVer(value);
    })
  }
  const downloadUpdate = async () => {
      const { data } = await supabase.storage.from('updates').download(appVer + '/launcher.exe')
      console.log(data)
      const buffer = await data.arrayBuffer();
      const log = await writeBinaryFile('launcher.exe',new Uint8Array(buffer),{dir: BaseDirectory.Desktop})
      console.log(log)
  }

  return (
    <div className='flex'>
      {!appVer === '' && !localVer === '' ?
        <div className='text-white align-center justify-center text-xl mt-10'>Sprawdzam aktualizacje.</div>
        :
        <div className='text-white align-center justify-center text-xl mt-10'>GUT, posiadasz pan na kompie {localVer}, a na serwerach jest {appVer}"</div>
      }
    </div>
  );
}
export default Update
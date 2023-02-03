import { getVersion } from '@tauri-apps/api/app';
import { supabase } from './supabase';
import { useState, useEffect } from 'react'
const Update = ({})=>{
    const [appVer, setappVer] = useState(true)
    const [appUpdateChceck, setAppCheck] = useState(true)
  
    /*useEffect(() => {
      setAppCheck(false);
      checkVersion();
    })*/
  
    
  
  
    const checkVersion = async () => {
        
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
  
  
    }
    checkVersion();
}

export default Update
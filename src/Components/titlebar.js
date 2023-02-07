import { appWindow } from '@tauri-apps/api/window';
import { getVersion } from '@tauri-apps/api/app';
import { supabase } from './supabase';
import { useState, useEffect } from 'react'
import { writeBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';

function Titlebar(props) {
    const [appVer, setappVer] = useState('');
    const [appChangelog, setChangelog] = useState('');
    const [appAt, setAt] = useState('');

    const [localVer, setlocalVer] = useState('');
    const [isUpdate, setUpdate] = useState(true);

    useEffect(() => {
        supaMeta();
        localCheckVersion();
        console.log(appVer);
        console.log(localVer);
        if (appVer !== '' && localVer !== '') {
            if (appVer !== localVer) {
                setUpdate(false);
                //downloadUpdate();
            }
        }

    }, [appVer, localVer])

    const supaMeta = async () => {
        let { data } = await supabase.from('updates').select();
        console.log(data)
        setappVer(data[0].version);
        setChangelog(data[0].changelog);
        setAt(data[0].updated_at);
    }
    const localCheckVersion = () => {
        const promGetVersion = Promise.resolve(getVersion());
        promGetVersion.then((value) => {
            setlocalVer(value);
        })
    }    
    return (
        <div data-tauri-drag-region className="titlebar">
            <div className="titlebar-logo" id="titlebar-icon">
                <img
                    src="/Assets/Taskbar/icon_logo.png"
                    alt="minimize"
                />
                <div className="titlebar-logo" id="titlebar-title">Launcher</div>
            </div>
            {!isUpdate &&
                <div className='hover:cursor-pointer flex flex-row bg-yellow-400 mr-16 pl-4 pr-4 align-middle hover:bg-yellow-600' onClick={()=>{
                    props.isUpdate(false);
                    props.updateVer(appVer);
                    props.updateChangelog(appChangelog);
                    props.updateAt(appAt);
                    }}>
                    <div className='mt-1'>Update is avalible</div>
                </div>
            }
            <div className="titlebar-button hover:cursor-pointer" id="titlebar-minimize" onClick={() => appWindow.minimize()}>
                <img
                    src="/Assets/Taskbar/icon_minus.png"
                    alt="minimize"
                />
            </div>
            <div className="titlebar-button hover:cursor-pointer" id="titlebar-maximize">
                <img
                    src="/Assets/Taskbar/icon_square.png"
                    alt="maximize"
                />
            </div>
            <div className="titlebar-button hover:cursor-pointer" id="titlebar-close" onClick={() => appWindow.close()}>
                <img src="/Assets/Taskbar/icon_close.png" alt="close" />
            </div>
        </div>
    )
}
export default Titlebar
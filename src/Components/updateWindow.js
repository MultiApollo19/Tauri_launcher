import { getVersion } from '@tauri-apps/api/app';
import { supabase } from './supabase';
import { useState, useEffect } from 'react'
import { writeBinaryFile, BaseDirectory,renameFile } from '@tauri-apps/api/fs';
import { relaunch } from '@tauri-apps/api/process';
import { format, parseISO } from "date-fns"


function UpdateWindow(props) {
  const downloadUpdate = async () => {
    const { data } = await supabase.storage.from('updates').download(props.updateVer + '/launcher.exe');
    console.log(data);
    const buffer = await data.arrayBuffer();
    const renameLog = await renameFile('launcher.exe', 'launcher_old.exe', {dir:BaseDirectory.Resource});
    console.log(renameLog);
    const log = await writeBinaryFile('launcher.exe', new Uint8Array(buffer), { dir: BaseDirectory.Resource });
    console.log(log);
    await relaunch();
  }

  return (
    <div className='w-1/3 h-3/4 bg-[#262937] absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <div className='flex h-6  bg-black'>
        <div className="ml-2 flex mr-auto">
          <img
            src="/Assets/Taskbar/icon_logo.png"
            alt="minimize"
          />
          <div className="text-[#A5A5A5] opacity-60 text-xl ml-2">Update</div>
        </div>
        <div className='w-10 flex-row-reverse h-6 hover:bg-red-600 flex justify-center align-middle right-0 hover:cursor-pointer' onClick={() => { props.isUpdate(true) }}>
          <img src='/Assets/Taskbar/icon_close.png' alt='Close' />
        </div>
      </div>
      <div className='text-white text-2xl flex ml-4 mt-2 flex-row'>What's New?</div>
      <div className='text-[#545454] text-base flex ml-4 flex-row'>{format(parseISO(props.updateAt), "MMMM dd, yyyy")}</div>
      <img className='rounded-md ml-6 mt-2' src={props.updateChangelog.banner} alt='' />
      <div>
        <div className='text-[#2596FF] flex ml-4 mt-4 flex-row'>New features</div>
        <div className='bg-[#2596FF] h-0.5 rounded-xl w-[358px] flex ml-4 flex-row'></div>
        <ul className='text-white flex flex-col list-disc ml-10 text-left mt-2'>
          {props.updateChangelog.features.map((item, index) =>
            <li key={index}>{item}</li>
          )}
        </ul>
      </div>
      <div>
        <div className='text-[#2596FF] flex ml-4 mt-4 flex-row'>Bugfixes</div>
        <div className='bg-[#2596FF] h-0.5 rounded-xl w-[358px] flex ml-4 flex-row'></div>
        <ul className='text-white flex flex-col list-disc ml-10 text-left mt-2'>
          {props.updateChangelog.bugfixes.map((item, index) =>
            <li key={index}>{item}</li>
          )}
        </ul>
      </div>
      <div className='flex flex-row-reverse'>
        <div className='bg-[#2596FF] w-32 h-8 absolute mr-6 bottom-3 rounded-md text-white text-xl align-middle justify-center pt-1 hover:bg-[#67a9e6] hover:cursor-pointer ease-in-out duration-200' onClick={()=> downloadUpdate()}>Update!</div>
      </div>


    </div>
  );
}
export default UpdateWindow
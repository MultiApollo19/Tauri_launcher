import './App.css';
import { appWindow } from '@tauri-apps/api/window';
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
        <div class="titlebar-button hover:cursor-pointer" id="titlebar-minimize" onClick={() => appWindow.minimize()}>
          <img
            src="/Assets/Taskbar/icon_minus.png"
            alt="minimize"
          />
        </div>
        <div class="titlebar-button hover:cursor-pointer" id="titlebar-maximize">
          <img
            src="/Assets/Taskbar/icon_square.png"
            alt="maximize"
          />
        </div>
        <div class="titlebar-button hover:cursor-pointer" id="titlebar-close" onClick={() => appWindow.close()}>
          <img src="/Assets/Taskbar/icon_close.png" alt="close" />
        </div>
      </div>
      <div className='bg-[#0E111D] flex flex-auto z-100 h-screen'>
        <div className='bg-[#0C0E18] w-60 flex mt-6 flex-col'>
          <div className='border-2 rounded-md w-56 h-20 mt-4 ml-2 align-middle justify-center flex p-6 hover:bg-[#2596FF] hover:cursor-pointer ease-in-out duration-200'>
            <img src="/Assets/App/gamepad.svg" className='w-8 h-8 mr-8' alt='Games'></img>
            <div className='text-white text-2xl'>Games</div>
          </div>
          <div className='border-2 rounded-md w-56 h-20 mt-4 ml-2 align-middle justify-center flex p-6 hover:bg-[#2596FF] hover:cursor-pointer ease-in-out duration-200'>
            <img src="/Assets/App/arrowdown.svg" className='w-8 h-8 mr-6' alt='Download'></img>
            <div className='text-white text-2xl'>Downloading</div>
          </div>
        </div>
        <div className='w-screen h-auto mt-6 flex flex-row'>
          <div className='ml-6 mt-4 flex w-32 h-44 hover:w-36 hover:h-48 hover:cursor-pointer ease-in-out duration-200'>
            <img className='rounded-md' src='/Assets/Games/Colony Builder.png' alt='Colony Builder'></img>
          </div>
          <div className='ml-6 mt-4 flex w-32 h-44 hover:w-36 hover:h-48 hover:cursor-pointer ease-in-out duration-200'>
            <img className='rounded-md' src='/Assets/Games/Colony Builder2.png' alt='Colony Builder 2'></img>
          </div>

        </div>
        <Update/>
      </div>
    </div>

  );
}

export default App;

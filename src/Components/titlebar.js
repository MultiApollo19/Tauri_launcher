import { appWindow } from '@tauri-apps/api/window';

function Titlebar(){
    return(
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
    )
}
export default Titlebar
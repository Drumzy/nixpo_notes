import { AiOutlineMinus, AiOutlineClose } from "react-icons/Ai";
import { appWindow } from "@tauri-apps/api/window";
import { useState } from "react";
import { TbMaximize, TbMinimize } from "react-icons/tb";
function WindowBar() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  function handleToggleMaximize() {
    appWindow.toggleMaximize();
    setIsFullscreen((prevState) => !prevState);
  }
  return (
    <div
      data-tauri-drag-region
      className="flex items-center justify-end gap-1 h-[2%]"
    >
      <div className="w-8 px-2 rounded-sm hover:bg-slate-500/25">
        <AiOutlineMinus size={18} onClick={() => appWindow.minimize()} />
      </div>
      <div className="w-8 px-2 rounded-sm hover:bg-slate-500/25">
        {isFullscreen ? (
          <TbMinimize size={18} onClick={() => handleToggleMaximize()} />
        ) : (
          <TbMaximize size={18} onClick={() => handleToggleMaximize()} />
        )}
      </div>
      <div className="w-8 px-2 rounded-sm hover:bg-red-500">
        <AiOutlineClose size={18} onClick={() => appWindow.close()} />
      </div>
    </div>
  );
}

export default WindowBar;

import { useCallback, useState } from "react";
import Editor from "./components/Editor";
import SideBar from "./components/SideBar/SideBar";
import WindowBar from "./components/WindowBar";
import Preview from "./components/Preview";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NoteEditor from "./components/NoteEditor";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="notes" element={<NoteEditor />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

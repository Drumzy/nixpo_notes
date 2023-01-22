import { useState, useCallback } from "react";
import Editor from "../Editor";
import Preview from "../Preview";

function NoteEditor() {
  const [doc, setDoc] = useState<string>("");
  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);
  return (
    <div className="flex flex-col w-full h-[98%]">
      <div className="flex flex-col w-full h-[8%] p-1">
        <span className="text-lg font-bold">Example</span>
        <div className="flex justify-around">
          <span className="text-lg font-bold">Editor</span>
          <span className="text-lg font-bold">Preview</span>
        </div>
      </div>
      <div className="flex flex-row w-full h-[92%] p-1 justify-around">
        <Editor initialDoc={doc} onChange={handleDocChange} />
        <Preview doc={doc} />
      </div>
    </div>
  );
}

export default NoteEditor;

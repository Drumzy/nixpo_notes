import { useCallback, useEffect } from "react";
import { EditorState } from "@codemirror/state";
import useCodeMirror from "./hook";

export interface EditorProps {
  initialDoc: string;
  onChange: (doc: string) => void;
}
function Editor(props: EditorProps) {
  const { onChange, initialDoc } = props;
  const handleChange = useCallback(
    (state: EditorState) => onChange(state.doc.toString()),
    [onChange]
  );
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initalDoc: initialDoc,
    onChange: handleChange,
  });
  useEffect(() => {
    if (!editorView) {
    }
  }, [editorView]);
  return (
    <div
      className="w-[48%] h-full overflow-auto scrollbar-dark"
      ref={refContainer}
    ></div>
  );
}
export default Editor;

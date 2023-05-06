import { useRef, useEffect } from "react";
import { Box, useTheme } from "@chakra-ui/react";

import { basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

import useSessionStorage from "./sessionStorage";

const Editor = () => {
  const editor = useRef<HTMLDivElement>(null);
  const [code, setCode] = useSessionStorage("code", "Hello World");

  const theme = useTheme();

  useEffect(() => {
    const startState = EditorState.create({
      doc: code,
      extensions: [
        lineNumbers(),
        basicSetup,
        keymap.of(defaultKeymap),
        javascript(),
        oneDark,
        EditorView.theme({
          "&": {
            color: theme.colors.gray[100],
            backgroundColor: theme.colors.gray[900],
            fontFamily: theme.fonts.mono,
          },
          ".cm-gutters": {
            backgroundColor: theme.colors.gray[800],
            borderBottom: `1px solid ${theme.colors.gray[700]}`,
            borderTop: `1px solid ${theme.colors.gray[700]}`,
          },
          ".cm-scroller": {
            backgroundColor: theme.colors.gray[800],
          },
          ".cm-content": {
            caretColor: theme.colors.gray[100],
          },
        }),
      ],
      
    });

    const view = new EditorView({
      state: startState,
      parent: editor?.current ?? undefined,
    });

    const updateHandler = () => {
      const newCode = view.state.doc.toString();
      setCode(newCode);
    };
    view.dom.addEventListener("update", updateHandler);

    return () => {
      view.dom.removeEventListener("update", updateHandler);
      view.destroy();
    };
  }, []);

  return <Box ref={editor} fontSize={["10px", "12px", "14px", "16px"]} />;
};

export default Editor;

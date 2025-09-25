import { useCallback, useEffect } from 'react';
import {
  CodeBracketIcon,
  EllipsisHorizontalIcon,
  LinkIcon,
  PaperClipIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';
import { useEditor, EditorContent } from '@tiptap/react';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import StarterKit from '@tiptap/starter-kit';
import { ResizableImage } from 'tiptap-extension-resizable-image';
import 'tiptap-extension-resizable-image/styles.css';
import Code from '@tiptap/extension-code';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Editor({ value, onChange }: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      ResizableImage,
      Image,
      Code,
      Link.configure({ openOnClick: false }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl',
      },
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  const imageHandler = useCallback(() => {
    if (!editor) return;
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string;
        editor.chain().focus().setImage({ src: base64Image }).run();
      };
      reader.readAsDataURL(file);
    };
  }, [editor]);

  const fileHandler = useCallback(() => {
    if (!editor) return;
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.click();

    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;
      editor
        .chain()
        .focus()
        .insertContent(`<a href="#" download="${file.name}">${file.name}</a>`)
        .run();
    };
  }, [editor]);

  const linkHandler = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  return (
    <div className="custom-editor-wrapper border rounded-md">
      <EditorContent editor={editor} className="editor" />
      <div
        id="toolbar"
        className="flex items-center gap-1 p-2 border-t !border-none text-gray-500"
      >
        <button
          type="button"
          title="이미지"
          onClick={imageHandler}
          className="p-2 !border-none hover:bg-gray-100 rounded-full"
        >
          <PhotoIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          title="링크"
          onClick={linkHandler}
          className={`p-2 !border-none hover:bg-gray-100 rounded-full ${
            editor?.isActive('link') ? 'bg-gray-200 text-blue-500' : ''
          }`}
        >
          <LinkIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          title="코드 블록"
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`p-2 !border-none hover:bg-gray-100 rounded-full ${
            editor?.isActive('codeBlock') ? 'bg-gray-200 text-blue-500' : ''
          }`}
        >
          <CodeBracketIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          title="파일"
          onClick={fileHandler}
          className="p-2 !border-none hover:bg-gray-100 rounded-full"
        >
          <PaperClipIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="p-2 !border-none hover:bg-gray-100 rounded-full"
        >
          <EllipsisHorizontalIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

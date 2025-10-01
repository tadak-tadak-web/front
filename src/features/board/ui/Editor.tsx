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
import { useTiptapFileUpload } from '@/features/board/model';
import clsx from 'clsx';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  isEditable: boolean;
}

export default function Editor({ value, onChange, isEditable }: EditorProps) {
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
    editable: isEditable,

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
  const { uploadImage, uploadFile } = useTiptapFileUpload({
    editor,
  });
  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable);
    }
  }, [isEditable, editor]);
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  const linkHandler = useCallback(() => {
    if (!editor) return;

    if (editor.state.selection.empty) {
      alert('링크를 걸 텍스트를 먼저 선택해주세요.');
      return;
    }
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
    <>
      <div
        className={clsx('custom-editor-wrapper  rounded-md', {
          border: isEditable,
        })}
      >
        <EditorContent editor={editor} className="editor" />
        {isEditable && (
          <div
            id="toolbar"
            className="flex items-center gap-1 p-2 border-t !border-none text-gray-500"
          >
            <button
              type="button"
              title="이미지"
              onClick={uploadImage}
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
              onClick={uploadFile}
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
        )}
      </div>
      {isEditable && (
        <div className="flex justify-end items-center mt-2">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-600 transition-colors"
          >
            업로드
          </button>
        </div>
      )}
    </>
  );
}

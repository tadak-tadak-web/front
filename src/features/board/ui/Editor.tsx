import 'react-quill-new/dist/quill.snow.css';
import {
  CodeBracketIcon,
  EllipsisHorizontalIcon,
  LinkIcon,
  PaperClipIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';
import hljs from 'highlight.js';
import ReactQuill, { Quill } from 'react-quill-new';
import { useRef, useMemo } from 'react';
import { ImageResize } from 'quill-image-resize-module-ts';
import 'highlight.js/styles/atom-one-dark.css';
const Syntax = Quill.import('modules/syntax');
Quill.register('modules/syntax', Syntax);
Quill.register('modules/imageResize', ImageResize);
interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}
hljs.configure({
  languages: ['javascript', 'ruby', 'python', 'java', 'cpp', 'kotlin', 'sql'],
});
const formats = ['image', 'link', 'code-block', 'file'];

export default function Editor({ value, onChange }: EditorProps) {
  const quillRef = useRef<ReactQuill>(null);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: '#toolbar',
        handlers: {
          image: () => {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.click();

            input.onchange = async () => {
              const file = input.files?.[0];
              if (!file) return;

              const reader = new FileReader();
              reader.onload = () => {
                const base64Image = reader.result;

                if (quillRef.current) {
                  const quill = quillRef.current.getEditor();
                  const range = quill.getSelection();
                  quill.insertEmbed(range?.index || 0, 'image', base64Image);
                }
              };
              reader.readAsDataURL(file);
            };
          },
          file: () => {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.click();
            input.onchange = () => {
              const file = input.files?.[0];
              if (!file || !quillRef.current) return;
              const quill = quillRef.current.getEditor();
              const range = quill.getSelection(true);
              quill.insertText(range.index, file.name, 'link', '#');
              quill.setSelection(range.index + file.name.length, 0);
            };
          },
        },
      },
      imageResize: {
        modules: ['Resize', 'DisplaySize'],
        parchment: Quill.import('parchment'),
      },
      syntax: { hljs },
    }),
    []
  );

  return (
    <div className="custom-editor-wrapper">
      <ReactQuill
        className="h-30 mb-2"
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="여기에 내용을 입력하세요..."
      />
      <div
        className="flex items-center gap-1 p-2 !border-none text-gray-500"
        id="toolbar"
      >
        <button
          type="button"
          title="이미지"
          className="ql-image p-2 !border-none hover:bg-gray-100 rounded-full"
        >
          <PhotoIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          title="링크"
          className="ql-link p-2 hover:bg-gray-100 rounded-full"
        >
          <LinkIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          title="코드 블록"
          className="ql-code-block p-2 hover:bg-gray-100 rounded-full"
        >
          <CodeBracketIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          title="파일"
          className="ql-file p-2 hover:bg-gray-100 rounded-full"
        >
          <PaperClipIcon className="h-5 w-5" />
        </button>
        <button type="button" className="p-2 hover:bg-gray-100 rounded-full">
          <EllipsisHorizontalIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

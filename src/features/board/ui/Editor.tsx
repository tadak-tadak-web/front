import {
  CodeBracketIcon,
  EllipsisHorizontalIcon,
  LinkIcon,
  PaperClipIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';
import ReactQuill, { Quill } from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useRef, useMemo } from 'react';
import { ImageResize } from 'quill-image-resize-module-ts';

Quill.register('modules/imageResize', ImageResize);
interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

const formats = ['image', 'link', 'code-block'];

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
              console.log(file);
              // 파일 이름으로 링크를 만들고 삽입합니다.
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
        className="flex items-center gap-1 p-2 border-t text-gray-500 border-none"
        id="toolbar"
      >
        <button
          type="button"
          className="ql-image p-2 hover:bg-gray-100 rounded-full"
        >
          <PhotoIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="ql-link p-2 hover:bg-gray-100 rounded-full"
        >
          <LinkIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="ql-code-block p-2 hover:bg-gray-100 rounded-full"
        >
          <CodeBracketIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
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

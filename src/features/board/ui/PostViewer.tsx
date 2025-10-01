import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

interface PostViewerProps {
  dirtyHtml: string;
}
export default function PostViewer({ dirtyHtml }: PostViewerProps) {
  const cleanHtml = DOMPurify.sanitize(dirtyHtml);

  const content = parse(cleanHtml);

  return <>{content}</>;
}

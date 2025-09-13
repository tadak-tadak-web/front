export interface AssignmentFile {
  id: string;
  fileName: string;
  fileContent: string;
  fileSize: number;
  status?: 'uploading' | 'success' | 'error';
}

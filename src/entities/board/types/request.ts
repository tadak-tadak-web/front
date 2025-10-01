export interface CreatePostRequest {
  content: string;
  authorId: string;
  author: string;
}

export interface EditPostRequest extends CreatePostRequest {
  id: number;
}

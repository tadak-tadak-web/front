export interface Post {
  id: number;
  author: string;
  authorId: string;
  avatar: string;
  content: string;
  imageUrl: string[] | null;
  likes: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
}

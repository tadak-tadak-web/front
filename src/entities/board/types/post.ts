export interface Post {
  id: number;
  author: string;
  avatar: string;
  content: string;
  imageUrl: string[] | null;
  likes: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
}

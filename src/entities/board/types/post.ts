export interface Post {
  id: number;
  author: string;
  avatar: string;
  time: string;
  content: string;
  imageUrl: string[] | null;
  likes: number;
  comments: number;
}

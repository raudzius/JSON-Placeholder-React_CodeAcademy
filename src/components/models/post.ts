import User from './user';

export default interface PostI {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User;
}

import User from './user';

export default interface PostInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User;
}

export type User = {
  allow_password_change: boolean;
  email: string;
  id: string;
  image: string | null;
  provider: string;
  uid: string;
}
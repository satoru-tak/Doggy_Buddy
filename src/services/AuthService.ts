import Client from '../api/client';

class AuthService {
  // login http://localhost:3000/api/v1/auth/sign_in
  login(data: any): Promise<any> {
    return Client.post('/auth/sign_in', data);
  };
  // logout http://localhost:3000/api/v1/auth/sign_out
  logout(data: any): Promise<any> {
    return Client.delete('/auth/sign_out', data);
  };
  // sign up http://localhost:3000/api/v1/auth
  signUp(data: any): Promise<any> {
    return Client.post('/auth', data);
  };
}

export default new AuthService();
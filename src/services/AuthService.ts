import Client from '../api/client';

class AuthService {
  login(data: any): Promise<any> {
    return Client.post('/auth/sign_in', data);
  };
  logout(data: any): Promise<any> {
    return Client.delete('/auth/sign_out', data);
  };
  signUp(data: any): Promise<any> {
    return Client.post('/auth', data);
  };
}

export default new AuthService();
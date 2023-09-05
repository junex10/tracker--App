import Api from './../utils/api';
import env from 'react-native-config';

const URL = `${env.API}auth?`;

class AuthService {
    
    static login = (body, header) => Api.fetch(`${URL}login`, body, header)
}

export default AuthService
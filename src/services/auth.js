import Api from './../utils/api';

const URL = `auth/`;

class AuthService {
    
    static login = (body) => Api.fetch(`${URL}login`, body)
}

export default AuthService
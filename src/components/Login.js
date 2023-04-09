import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from './Form.js';
import {setUser} from '../store/slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                nav('/main');
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <Form
            title="Войти"
            handleClick={handleLogin}
        />
    )
}

export default Login;
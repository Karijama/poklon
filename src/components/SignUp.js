import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import Form from './Form.js';
import {setUser} from '../store/slices/userSlice';

const SignUp = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                nav('/log');
            })
            .catch(console.error)
    }

    return (
        <Form
            title="Зарегистрироваться"
            handleClick={handleRegister}
        />
    )
}

export default SignUp;

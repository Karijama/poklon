import {useState} from 'react';

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div>
            <div className=''>
                <div className='flex justify-center'><input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Адрес"
                    className='border rounded-2xl outline-none w-64'
                /></div>
                <div className='flex justify-center'><input
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Пароль"
                    className='border rounded-2xl outline-none w-64'
                /></div>
            </div>
            <div className='flex justify-center'><button
                onClick={() => handleClick(email, pass)}
                className="border rounded-2xl bg-white hover: ring-2 w-64"
            >
                {title}
            </button></div>
        </div>
    )
}

export default Form;

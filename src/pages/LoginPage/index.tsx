import useStore from '../../store/users';
import './styles.css';
import { useState, useEffect } from 'react';

export default function LoginScreen() {
    const { setUser, setUsersId, usersId } = useStore();
    const [id, setId] = useState("");
    const [isLoginMode, setIsLoginMode] = useState(true);

    useEffect(() => {
        localStorage.setItem('usersId', JSON.stringify(usersId));
    }, [usersId]);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isLoginMode) {
            handleLogin();
        } else {
            handleRegistration();
        }
        setId("");
    };

    const handleLogin = () => {
        if (usersId.some(user => user.id.trim() === id.trim())) {
            setUser(id);
        } else {
            alert("Пользователь не найден. Пожалуйста, зарегистрируйтесь.");
        }
    };

    const handleRegistration = () => {
        if (!usersId.some(user => user.id.trim() === id.trim())) {
            setUsersId([...usersId, { id }]);
            setUser(id);
        } else {
            alert("Пользователь с таким ID уже существует.");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };

    const toggleMode = () => {
        setIsLoginMode(!isLoginMode);
    };

    return (
        <div className='login-screen'>
            <form onSubmit={handleFormSubmit} className='login-form'>
                <span className='form-heading'>{isLoginMode ? 'Войти в систему' : 'Регистрация'}</span>
                <div className='input-block'>
                    <span>Введите ID</span>
                    <input type="text" value={id} onChange={handleInputChange} />
                </div>
                <div className="button-text-block">
                    <button type="submit">{isLoginMode ? 'Войти' : 'Регистрация'}</button>
                    <p className="registration-text" onClick={toggleMode}>
                        {isLoginMode ? 'Нет аккаунта?' : 'Есть аккаунт?'}
                    </p>
                </div>
            </form>
        </div>
    );
}

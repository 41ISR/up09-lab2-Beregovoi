import useStore from '../../store/users';
import './styles.css';
import { useState } from 'react';

export default function LoginScreen() {
    const { setUser, setUsersId, usersId } = useStore();
    const [id, setId] = useState("");

    const AddUserId = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUser(id);
        setUsersId([...usersId, { id: id }]); 
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };


    return (
        <div className='login-screen'>
            <form onSubmit={AddUserId} className='login-form'>
                <span className='form-heading'>Войти в систему</span>
                <div className='input-block'>
                    <span>Введите ID</span>
                    <input type="text" value={id} onChange={handleInputChange} />
                </div>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
}

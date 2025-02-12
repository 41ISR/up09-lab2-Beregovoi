import { useState } from 'react'
import './styles.css'

export default function LoginScreen() {

    const [id, setId] = useState();

    const handleClick = () => {
        console.log("123456789")
    }

    return (
        <div className='login-screen'>
            <form className='login-form'>
                <span className='form-heading'>Войти в систему</span>
                <div className='input-block'>
                    <span>Введите ID</span>
                    <input type="text" />
                </div>
                <button onClick={handleClick} type="submit">Войти</button>
            </form>
        </div>
    )

} 
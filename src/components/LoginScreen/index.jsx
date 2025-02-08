import './styles.css'

export default function LoginScreen() {

    return (
        <div className='login-screen'>
            <form className='login-form'>
                <span className='form-heading'>Войти в систему</span>
                <div className='input-block'>
                    <span>Введите ID</span>
                    <input type="text" />
                </div>
                <button type="submit">Войти</button>
            </form>
        </div>
    )

} 
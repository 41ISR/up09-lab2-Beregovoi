import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useStore from '../store/users';

export default function Auth() {
  const { user, usersId } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser'); // Получаем текущего пользователя из localStorage
    if (storedUser || user) {
      navigate("/"); // Если пользователь авторизован, перенаправляем на главную
    } else if (usersId.length === 0) {
      navigate("/login"); // Если нет пользователей, перенаправляем на страницу входа
    }
  }, [user, usersId, navigate]);

  return <Outlet />;
}
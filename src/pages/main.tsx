import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useStore from '../store/users';

export default function Auth() {
    const { usersId } = useStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (usersId.length === 0) {
            navigate("/login");
        } else {
            navigate("/");
        }
    }, [usersId, navigate]);

    return (
        <Outlet />
    );
}

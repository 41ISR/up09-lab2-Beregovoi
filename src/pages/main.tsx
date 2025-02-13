import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Auth() {

    const usersId = "";
    const navigate = useNavigate();

    useEffect(() => {
        if (!usersId) {
            navigate("/login");
        }
    }, [])

    return (
        <Outlet />
    )

}
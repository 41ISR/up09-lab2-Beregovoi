import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Auth() {

    const userId = "123";
    const navigate = useNavigate();

    useEffect(() => {
        if (!userId) {
            navigate("/login");
        }
    }, [])

    return (
        <Outlet />
    )

}
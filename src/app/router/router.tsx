import { createBrowserRouter } from "react-router-dom";

import LoginScreen from "../../pages/LoginPage";
import MainScreen from "../../components/MainScreen";
import Auth from "../../pages/main";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginScreen />
    },
    {
        element: <Auth />,
        path: "/",
        children: [{
            path: "",
            element: <MainScreen />
        }]
    }
]);

export default router
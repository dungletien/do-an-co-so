import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import AboutPage from "./pages/users/aboutPage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />,
        },

        {
            path: ROUTERS.USER.ABOUT,
            component: <AboutPage />,
        },
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route
                        key={key}
                        path={item.path}
                        element={item.component}
                    />
                ))}
            </Routes>
        </MasterLayout>
    );
};
const RouterCustom = () => {
    return renderUserRouter();
};
export default RouterCustom;

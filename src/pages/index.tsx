import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import MainPage from "./mainPage/mainPage";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ReservationPage from "./reservationPage/reservationPage";
import Footer from "../components/Footer/Footer";
import AdminMenu from "./adminPage/UI/adminMenu/adminMenu";
import AdminEditor from "./adminPage/adminEditor/adminEditor";
import AdminAbout from "./adminPage/adminEditor/adminAbout/adminAbout";
import AdminAd from "./adminPage/adminAd/adminAd";
import AdminNotif from "./adminPage/adminNotif/adminNotif";
import AdminFooter from "./adminPage/adminFooter/adminFooter";
import AboutPage from "./mainPage/components/aboutPage/aboutPage";
import AdminEdit from "./adminPage/adminEdit/adminEdit";


const MainRoutes = () => {
    let [isAdmin, setIsAdmin] = useState<boolean>(true);

    const PUBLIC_ROUTES= [
        {
            link:"/",
            element: <MainPage />,
            id:1,
        },
        {
            link:"/footer",
            element: <Footer />,
            id:2,
        },

        {
            link:"/about",
            element: <AboutPage />,
            id:3,
        },
        {
            link:"/reservation",
            element: <ReservationPage />,
            id:4,
        }
        // {
        //     link:"/",
        //     element: <MainPage />,
        //     id:1,
        // },
        // {
        //     link:"/",
        //     element: <MainPage />,
        //     id:1,
        // },
        // {
        //     link:"/",
        //     element: <MainPage />,
        //     id:1,
        // },

    ]

    const PRIVATE_ROUTES = [
        {
            link:"admin",
            element: <AdminMenu/>,
            id:1,
        },
        {
            link:"admin/editor",
            element: <AdminEditor/>,
            id:2,
        },
        {
            link:"admin/editor/about",
            element: <AdminAbout/>,
            id:3,
        },
        {
            link:"admin/advertising",
            element: <AdminAd/>,
            id:4,
        },
        {
            link:"admin/notification",
            element: <AdminNotif/>,
            id:5,
        },
        {
            link:"admin/footer",
            element: <AdminFooter/>,
            id:6,
        },
        {
            link:"admin/edit",
            element: <AdminEdit/>,
            id:7,
        },
    ]

    return (
        <React.Suspense fallback={<span>Loading...</span>}>
            <Routes>
                {isAdmin ? (
                    PRIVATE_ROUTES.map(({link, id, element}) => (
                        <Route path={link} element={element} key={id}/>
                    ))
                ) : (
                    <Route path="*" element={<ErrorPage/>}/>
                )}

                {PUBLIC_ROUTES.map(({link, id, element}) => (
                    <Route path={link} element={element} key={id}/>
                ))}
            </Routes>
        </React.Suspense>
    );

};

export default MainRoutes;

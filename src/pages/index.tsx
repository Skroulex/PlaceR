import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import MainPage from "./mainPage/mainPage";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AdminPage from "./adminPage/adminPage";
import ReservationPage from "./reservationPage/reservationPage";
import Footer from "../components/Footer/Footer";


const MainRoutes = () => {
    let [isAdmin, setIsAdmin] = useState<boolean>(true);

    const PUBLIC_ROUTES= [
        {
            link:"/footer",
            element: <Footer />,
            id:1,
        },
        {
            link:"/",
            element: <MainPage />,
            id:1,
        },
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
        // {
        //     link:"/",
        //     element: <MainPage />,
        //     id:1,
        // },
        {
            link:"/reservation",
            element: <ReservationPage />,
            id:1,
        }
    ]

    const PRIVATE_ROUTES = [
        {
            link:"admin",
            element: <AdminPage/>,
            id:1,
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

import React from "react";

import MainRoutes from "./pages";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {ChakraProvider} from "@chakra-ui/react";
import {useExcept} from "./utils/helpers/headerExceptions";
import {useLocation} from "react-router-dom";

const App = () => {
    const location = useLocation()
    const isExcept = useExcept(location.pathname)
    return (
        <div>
            {isExcept && < Header/>}
            <MainRoutes />
        </div>
    );
};

export default App;

import React from "react";

import MainRoutes from "./pages";
import {useLocation} from "react-router-dom";
import {useExcept} from "./utils/helpers/headerExceptions";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {ChakraProvider} from "@chakra-ui/react";

const App = () => {
    const location = useLocation()
    const isExcept = useExcept(location.pathname)
    return (
        <div>
                {isExcept && <Header />}
                <MainRoutes />
                {isExcept && <Footer/>}

        </div>
    );
};

export default App;

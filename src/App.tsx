import React from "react";

import MainRoutes from "./pages";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Header />
            <MainRoutes />
            {/* {isExcept && <Footer/>} */}
        </div>
    );
};

export default App;

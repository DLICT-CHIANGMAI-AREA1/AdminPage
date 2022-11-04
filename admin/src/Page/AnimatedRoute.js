import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import News from "./News"
import Data from "./Data"
import DataWebService from "./DataWebService"
import PDFViewer from "./OperatingManual";
import Person from "./Person";

const AnimatedRoute = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/News" element={<News />} />
                <Route path="/OperatingManual" element={<PDFViewer />} />
                <Route path="/Person" element={<Person />} />
                <Route path="/Data" element={<Data />} />
                <Route path="/DataWebService" element={<DataWebService />} />
              
                
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoute;

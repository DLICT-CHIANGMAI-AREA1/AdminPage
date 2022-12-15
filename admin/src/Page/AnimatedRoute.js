import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import News from "./News";
import Data from "./Data";
import ListData from "./SubPage/ListData";
import ListLastData from "./SubPage/ListLastData";
import PersonDetail from "./SubPage/PersonDetail";
import PDFViewer from "./OperatingManual";
import Person from "./Person";
import Media from "./Media";
import Mission from "./Mission";
import Service from "./Service";
import DLICT from "./DLICT";
import AddNewsPage from "./SubPage/AddNewsPage";
const AnimatedRoute = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/News" element={<News />} />
                <Route path="/OperatingManual" element={<PDFViewer />} />
                <Route path="/Person" element={<Person />} />
                <Route path="/Media" element={<Media />} />
                <Route path="/Mission" element={<Mission />} />
                <Route path="/Service" element={<Service />} />
                <Route path="/DLICT" element={<DLICT />} />
                <Route path="/Person/:param" element={<PersonDetail />} />
                <Route path="/News/AddNews" element={<AddNewsPage />} />
                <Route path="/BigData" element={<Data />} />
                <Route path="/BigData/ListData/:param1" element={<ListData />} />
                <Route path="/BigData/ListData/Data/:param1/:param2/:param3" element={<ListLastData />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoute;

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "ข้อมูลข่าว",
        path: "/News",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text",
    },
    {
        title: "คู่มือปฏิบัติงาน ",
        path: "/OperatingManual",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text",
    },
    {
        title: "ทำเนียบบุคลากร",
        path: "/Person",
        icon: <IoIcons.IoMdPeople />,
        cName: "nav-text",
    },
    {
        title: "Data",
        path: "/Data",
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: "nav-text",
    },
    {
        title: "DataWebService",
        path: "/DataWebService",
        icon: <IoIcons.IoMdHelpCircle />,
        cName: "nav-text",
    },
];

import {Lab2} from "./src/components/Lab2.jsx";
import {Lab3} from "./src/components/Lab3.jsx";
import {CyrillicWordsFinder, Lab4, RegistrationForm} from "./src/components/Lab4.jsx";
import {Lab6} from "./src/components/Lab6.jsx";
import {Lab5} from "./src/components/Lab5.jsx";
import {Lab7} from "./src/components/Lab7.jsx";
import {Lab8} from "./src/components/Lab8.jsx";
import {Lab9} from "./src/components/Lab9.jsx";
import Lab10 from "./src/components/lab10.jsx";

const AppRoutes = [
    {
        index: true,
        element: <Lab2 />
    },
    {
        index: '/mtip',
        element: <Lab2 />
    },
    {
        path: '/mtip/lab2',
        element: <Lab2 />
    },
    {
        path: '/mtip/lab3',
        element: <Lab3 />
    },
    {
        path: '/mtip/lab4',
        element: <Lab4  />
    },
    {
        path: '/mtip/lab4/registration',
        element: <RegistrationForm  />
    },
    {
        path: '/mtip/lab4/cyrillic',
        element: <CyrillicWordsFinder />
    },
    {
        path: '/mtip/lab5',
        element: <Lab5 />
    },
    {
        path: '/mtip/lab6',
        element: <Lab6 />
    },
    {
        path: '/mtip/lab7',
        element: <Lab7 />
    },
    {
        path: '/mtip/lab8',
        element: <Lab8 />
    },
    {
        path: '/mtip/lab9',
        element: <Lab9 />
    },
    {
        path: '/mtip/lab10',
        element: <Lab10 />
    },
];

export default AppRoutes;
import {Lab2} from "./src/components/Lab2.jsx";
import {Lab3} from "./src/components/Lab3.jsx";
import {CyrillicWordsFinder, Lab4, RegistrationForm} from "./src/components/Lab4.jsx";
import {Lab6} from "./src/components/Lab6.jsx";

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
    },{
        path: '/mtip/lab4/registration',
        element: <RegistrationForm  />
    },
    {
        path: '/mtip/lab4/cyrillic',
        element: <CyrillicWordsFinder />
    },
    {
        path: '/mtip/lab6',
        element: <Lab6 />
    },
];

export default AppRoutes;
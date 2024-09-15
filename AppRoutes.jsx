import {Lab2} from "./src/components/Lab2.jsx";
import {Lab3} from "./src/components/Lab3.jsx";

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
];

export default AppRoutes;
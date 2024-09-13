import {Lab2} from "./src/components/Lab2.jsx";

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
    }
];

export default AppRoutes;
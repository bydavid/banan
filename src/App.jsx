// noinspection JSValidateTypes
import React from 'react'
import BananPage from './pages/BananPage'
import Overlay from "./components/Overlay.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/error-page.jsx";
import StrawbPage from "./pages/StrawbPage.jsx";
import GoesPage from "./pages/GoesPage.jsx";



const router = createBrowserRouter([
    {
        path: "/banan",
        element: <Overlay/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/banan',
                element: <BananPage/>,
            },
            {
                path: '/banan/strawbs',
                element: <StrawbPage/>,
            },
            {
                path: '/banan/goes',
                element: <GoesPage/>,
            },
        ],
    },
]);

export default function App() {
    return (<>
        <RouterProvider router={router} />
    </>)
}

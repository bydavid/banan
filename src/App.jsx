// noinspection JSValidateTypes

import React from 'react'
import BananPage from './pages/BananPage'
import Overlay from "./components/Overlay.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/error-page.jsx";
import Root from "./pages/Root.jsx";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'Banan',
                element: <BananPage/>,
            },
        ],
    },
]);

export default function App() {
    return (<>
        <RouterProvider router={router} />
    </>)
}

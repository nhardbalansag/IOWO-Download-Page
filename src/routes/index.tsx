
import React from 'react'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

import {
    IOWOReportIndex,
    Content
} from '../pages/iowo-reporting-tool/index'

const router = createBrowserRouter([
    {
        path: "/iowo",
        loader: () => ({ message: "Hello Data Router!" }),
        Component: IOWOReportIndex,  
        children:[
            {
                path: "",
                element: <Content/>
            },
        ]
    }
])

const Routes = () =>{
    return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default Routes;

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
        path: "/IOWO-Download-Page",
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
    return <RouterProvider router={router}/>;
}

export default Routes;
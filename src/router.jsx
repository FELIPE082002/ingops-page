import {
    createBrowserRouter,
} from "react-router-dom";
import { Home } from "@/layouts";
import { Init, Planes } from "@/pages";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <Init />,
            },
            {
                path: "/marketing",
                element: <Planes />,
            }
        ]
    },
]);

export default routes
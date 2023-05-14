import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/Index"

const routers = [
    {
        basename: '/',
        path: '/',
        element: <Home />
    },
]


const router = createBrowserRouter(routers)

export default router;
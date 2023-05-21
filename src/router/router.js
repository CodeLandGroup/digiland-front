import CategoriesPage from "../pages/Categories/CategoriesPage";
import Home from "../pages/Home/Index"
import ProductPages from "../pages/Product/ProductPages";

const routes = [
    { path: '/' , element: <Home />  },
    { path: '/categories' , element: <CategoriesPage />},
    { path: '/product/:id' , element: <ProductPages />}
]



export default routes;
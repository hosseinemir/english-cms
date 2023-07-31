import Home from "./pages/Home/Home"
import UsersList from "./pages/UsersList/UsersList"
import NewUsers from "./pages/NewUsers/NewUsers"
import Products from "./pages/Products/Products"
import NewProduct from "./pages/NewProduct/NewProduct"
import Product from "./pages/Product/Product"



let routes=[
    {path:"/",element:<Home></Home>},
    {path:"/users",element:<UsersList></UsersList>},
    {path:"/newusers",element:<NewUsers></NewUsers>},
    {path:"/products",element:<Products></Products>},
    {path:"/newproduct",element:<NewProduct></NewProduct>},
    {path:"/product/:proid",element:<Product></Product>},
]

export default routes
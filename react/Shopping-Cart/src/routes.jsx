import App from "./App";
import Store from "./pages/Store";
import ProductDetail from "./pages/ProductDetail";
import {loader as storeLoader} from "./loader";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import ItemLists from "./pages/Collection";
import { element } from "prop-types";

const routes = [
    {
      path: "/",
      element: <App />,
      loader: storeLoader,
      children: [
        { index: true, element: <Homepage /> },
        { path: "store",
          element: <Store/>,
          children: [
            { index: true, element: <ItemLists /> },
            { path: "/store/:URLname", element: <ItemLists/>},
            { path: "/store/cart", element: <Cart/>}

          ]
        },
      
      ]
    },

  ];

export default routes;
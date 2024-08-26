import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import {
  HomeLayout, //what's on multiple pages(nav bar etc), Outlet sends navbar and rest to other pages
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages';

import { ErrorElement } from './components';

//loaders
import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProduct';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
        errorElement: <ErrorElement></ErrorElement>,
        loader: landingLoader,
      },
      {
        path: 'products',
        element: <Products></Products>
      },
      {
        path: 'products/:id',
        element: <SingleProduct></SingleProduct>,
        errorElement: <ErrorElement></ErrorElement>,
        loader: singleProductLoader,
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'checkout',
        element: <Checkout></Checkout>
      },
      {
        path: 'orders',
        element: <Orders></Orders>
      },
    ]
  },
  {
    path: '/login',
    element: <Login></Login>,
    errorElement: <Error></Error>
  },
  {
    path: '/register',
    element: <Register></Register>,
    errorElement: <Error></Error>
  }
])


export default function App() {
  return (<RouterProvider router={router}></RouterProvider>

  )
}
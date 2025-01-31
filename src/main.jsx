import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './layouts/RootLayout'

import Contacts from './pages/Contacts'
import Products from './pages/Products'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'

import NotFound from './pages/NotFound'
import Providers from './contexts/Providers'

// Browser router (with paths, elements and children)
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/:productId',
        element: <ProductDetails />
      },
      {
        path: 'contacts',
        element: <Contacts />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

// Routerprovider
createRoot(document.getElementById('root')).render(
    <div>
      <Providers>
        <RouterProvider router={router}/>
      </Providers>
    </div>
)

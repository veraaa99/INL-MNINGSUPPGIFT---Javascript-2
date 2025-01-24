// Krav för godkänt:

// - Lista produkter: Du ska lista produkter på en sida med React genom att hämta dessa via det Web API 
// som ni har fått till uppgiften.

// - Produkt detaljer: Användaren ska kunna klicka på en produkt för att få upp detaljerad information på en separat sida, 
// där ska information så som bild, namn, beskrivning och pris finnas med.

// - Kontakt formulär: Du ska på en egen sida skapa ett formulär där användaren kan skriva in följande information: 
// Namn, e-postadress & meddelande. 
// Dessa fält ska ha enklare validering på sig så som att ett fält inte kan vara tomt och att alla fält måste vara ifyllda innan det skickas till API:et

// - Feedback: När kontakt formuläret har skickats och du har fått ett svar tillbaka med status 200 så ska ett meddelande skrivas ut på sidan 
// där du bekräftar att meddelandet har skickats.

// - Varukorg: Användaren ska kunna lägga till och ta bort produkter i sin varukorg. 
// Varukorgen ska visa antal produkter och det totala priset.

// - Navigering: Navigering mellan dina sidor ska ske med React-router-dom

// - Check-out sida: Användaren ska kunna gå till en check-out sida där varukorgen ska visas och man ska ges möjligheten att genomföra köpet, 
// rensa sin varukorg eller lägga till / ta bort enskilda produkter.

// - Datahantering: Du ska använda dig av Redux eller Context för att hantera och lagra information i applikationen under användning.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import RootLayout from './layouts/RootLayout'

import Contacts from './pages/Contacts'
import Products from './pages/Products'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'

import NotFound from './pages/NotFound'
import Providers from './contexts/Providers'
import MessageContextProvider from './contexts/MessageContext'

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
        path: 'login',
        element: <Login />
      },
      {
        path: 'registration',
        element: <Registration />
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

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <div>
    <Providers>
      <RouterProvider router={router}/>
    </Providers>
    </div>
    /* <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>

          <Route index element={<Home />}/>
          <Route path='products' element={<Products />}/>
          <Route path='products/:productId' element={<ProductDetails />}/>

          <Route path='contacts' element={<Contacts />}/>
          <Route path='login' element={<Login />}/>
          <Route path='registration' element={<Registration />}/>

          <Route path='checkout' element={<Checkout />}/>

          <Route path="*" element={<NotFound/>}/>
        </Route>

      </Routes>
    </BrowserRouter> */
    

  // </StrictMode>,
)

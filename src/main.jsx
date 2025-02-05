import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import AddVisa from './components/AddVisa/AddVisa.jsx';
import AllVisas from './components/AllVisas/AllVisas.jsx';
import MyAddedVisas from './components/MyAddedVisas/MyAddedVisas.jsx';
import VisaDetails from './components/VisaDetails/VisaDetails.jsx';
import MyVisaApplications from './components/MyVisaApplication/MyVisaApplication.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: "/all-visas",
        element: <AllVisas />,

      },
      {
        path: "/add-visa",
        element: <PrivateRoute>
          <AddVisa />
        </PrivateRoute>
      },
      {
        path: "/my-added-visas",
        element: <PrivateRoute>
          <MyAddedVisas />
        </PrivateRoute>,
      },
      {
        path: "/visa-details/:id",
        element: <PrivateRoute>
          <VisaDetails />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://sunflower-server-side.vercel.app/visas/${params.id}`)
      },
      {
        path: "/my-visa-applications",
        element: <PrivateRoute>
          <MyVisaApplications />
        </PrivateRoute>
      },
      {
        path: "",
        element: <PrivateRoute>

        </PrivateRoute>
      }

    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

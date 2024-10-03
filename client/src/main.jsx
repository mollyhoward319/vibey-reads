import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/Profile';
import Home from './pages/Home';
import ReccVibes from './pages/ReccVibes';
import Login from './pages/login';
import Signup from './pages/Signup';
import CreateVibes from './pages/CreateVibes';
// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/ReccVibes/:music/:books',
        element: <ReccVibes />,
      },
      {
        path: '/createvibes',
        element: <CreateVibes />,
      }
    ],
  },
]);
// Render the RouterProvider component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
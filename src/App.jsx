import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Home, Landing, Register, Login, Error, Dashboard } from './pages';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App;

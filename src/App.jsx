import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import {  Home, Landing, Register, Login,
          Error, Dashboard, AddBook, AllBooks,
          ReturnBook, Profile, GetBook } from './pages';

import { action as registerAction } from './pages/Register';

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
        action: registerAction
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          {
            index:true,
            element: <AllBooks />
          },
          {
            path: 'add-book',
            element: <AddBook />
          },
          {
            path: 'return-book',
            element: <ReturnBook />
          },
          {
            path: 'get-book',
            element: <GetBook />
          },
          {
            path: 'profile',
            element: <Profile />
          }
        ]
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App;

import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import {  Home, Landing, Register, Login,
          Error, Dashboard, AddBook, AllBooks,
          ReturnBook, Profile, GetBook, 
          EditBook} from './pages';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { loader as dashboardLoader } from './pages/Dashboard';
import { action as addBookAction } from './pages/AddBook';
import { loader as booksLoader } from './pages/AllBooks';

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
        action: loginAction
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: dashboardLoader,
        children: [
          {
            index:true,
            element: <AllBooks />,
            loader: booksLoader,
          },
          {
            path: 'add-book',
            element: <AddBook />,
            action: addBookAction
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
          },
          {
            path: 'edit-book/:id',
            element: <EditBook />
          },
          {
            path: 'delete-book/:id',
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

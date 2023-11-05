import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';
import Details from '../components/Details';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'details/:detailId',
        element: <Details />,
      },
    ],
  },
]);

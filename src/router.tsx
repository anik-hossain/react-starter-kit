import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import Home from './pages/Home';
import HelloWorld from './pages/HelloWorld';
import Layout from './components/layouts/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/hello-world',
        element: <HelloWorld />,
      },
    ],
  },
]);

export default router;

import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound404 from './components/NotFound404/NotFound404';
import { action as rootaction, loader as rootloader } from './routes/index';
import './index.css';

const Index = lazy(() => import('./routes/index'));
const Root = lazy(() => import('./routes/root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <Suspense>
      <Root/>
    </Suspense>,
    errorElement: <NotFound404/>,
    children: [
      {
        index: true,
        element: 
        <Suspense>
          <Index/>
        </Suspense>
      },
    ]
  },
  {
    path: 'account',
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

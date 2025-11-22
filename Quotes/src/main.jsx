import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Inspiration from './pages/Inspiration.jsx';
import Humor from './pages/Humor.jsx';
import Philosophy from './pages/Philosophy.jsx';
import Wisdom from './pages/Wisdom.jsx';
import Love from './pages/Love.jsx';
import Success from './pages/Success.jsx';
import DefaultPage from './pages/DefaultPage.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <DefaultPage /> },
      { path: 'inspiration', element: <Inspiration /> },
      { path: 'humor', element: <Humor /> },
      { path: 'philosophy', element: <Philosophy /> },
      { path: 'wisdom', element: <Wisdom /> },
      { path: 'success', element: <Success /> },
      { path: 'love', element: <Love /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

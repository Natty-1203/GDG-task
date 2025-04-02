import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import MovieList from './movieList';
import AllReducer from './reducer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <p>404 Error</p>,
  },
  {
    path: '/movielist',
    element: <MovieList />,
  },
]);

const store = configureStore({
  reducer: AllReducer,
});

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}

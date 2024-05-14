import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LayoutApp } from '../components/Layout';
import { App, Error, RegistrationForm, Participants } from '../pages';

export const AppProvider = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
    },
    {
      path: ':eventId/registration',
      element: <RegistrationForm />,
      errorElement: <Error />,
    },
    {
      path: ':eventId/participants',
      element: <Participants />,
      errorElement: <Error />,
    },
  ]);

  return (
    <LayoutApp>
      <RouterProvider router={router} />
    </LayoutApp>
  );
};

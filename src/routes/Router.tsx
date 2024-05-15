import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '../pages/Home.page';
import { DriversStanding } from '@/features/DriversStanding/DriversStanding';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/drivers-standing',
    element: <DriversStanding />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}

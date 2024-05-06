import { CityPage } from '@/pages/city';
import { FavouritesPage } from '@/pages/favourites';
import { MainPage } from '@/pages/main';
import { Layout } from '@/widgets/layout';
import { createBrowserRouter } from 'react-router-dom';

export const router = () => {
  return createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/city/:slug',
          element: <CityPage />,
        },
        {
          path: '/favourites',
          element: <FavouritesPage />,
        },
      ],
    },
  ]);
};

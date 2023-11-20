import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Error from './pages/Error';
import Landing from './pages/Landing';
import TopCharts from './pages/TopCharts';
import AlbumInfo from './pages/AlbumInfo';

const queryClient = new QueryClient( {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
} );

const router = createBrowserRouter( [
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'top-charts',
        element: <TopCharts />,
      },
      {
        path: 'album-info',
        element: <AlbumInfo />
      },
      {
        path: 'surprise-me',

      }
    ]
  },
] );

function App ()
{
  return (
    <QueryClientProvider client={ queryClient }>
      <RouterProvider router={ router } />
    </QueryClientProvider>
  );
}

export default App;
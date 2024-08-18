import Hooks from './pages/Hooks';
import Home from './pages/Home';
import ModalMUI from './components/ModalMUI';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  
    {
      path: '/renderizacao',
      element: <Hooks />
    },
  
    {
      path: '/modal',
      element: <ModalMUI />
    }
]);

export default router;
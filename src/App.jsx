import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import Loader from './components/common/Loader';

function App() {
  return (
    <>
      <Loader />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

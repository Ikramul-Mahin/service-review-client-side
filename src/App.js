import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './route/router';

function App() {
  return (
    <div className="">
      <RouterProvider router={router} ></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

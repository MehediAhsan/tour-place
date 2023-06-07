import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <div className='bg-black overflow-hidden'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

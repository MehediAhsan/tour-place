import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';
import bg from './assets/bg.mp4'

function App() {
  return (
    <div>
      <video autoPlay loop muted style={{position:'absolute', width:'100%', height:'100%', objectFit:'cover',left:'50%', top:'50%', zIndex:'-1', transform:"translate(-50%,-50%)"}}>
        <source src={bg} type="video/mp4" />
      </video>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

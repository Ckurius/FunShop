import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom'; // Import required components and functions

import Navbar from './components/navbar';
import Loading from './components/loading';
import Fetchdata from './components/fetchData';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Fetchdata />
      </div>

      {/* <Loading /> */}
    </>
  );
}

export default App;

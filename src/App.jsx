import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom'; // Import required components and functions

import navbar from '/src/components/navbar';
import { useState } from 'react';

import Navbar from './components/navbar';
import Loading from './components/loading';

function App() {
  return (
    <>
      <Navbar />
      <Loading />
    </>
  );
}

export default App;

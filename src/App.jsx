import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobpage from './pages/AddJobpage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<MainLayout/>}>
      <Route index element= {<HomePage/>} />
      <Route path = '/jobs' element= {<JobsPage/>} />
      <Route path = 'jobs/:id' element= {<JobPage/>} loader = {jobLoader} />
      <Route path = '/add-job' element= {<AddJobpage/>} />
      <Route path = '*' element= {<NotFoundPage/>} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App
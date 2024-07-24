import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobpage from './pages/AddJobpage';
import { addJob } from './Crud/AddNewJob';
import { deleteJob } from './Crud/DeleteJob';




const App = () => {

/*   post request to add job */

  // const addJob = async (newJob) => {
  //   const res = await fetch ('/api/jobs', {
  //     method : 'POST',
  //     headers : {
  //       'Content-Type': 'application/json'
  //     },
  //     body:JSON.stringify(newJob)
  //   });
  //   return;
  // }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<MainLayout/>}>
        <Route index element= {<HomePage/>} />
        <Route path = '/jobs' element= {<JobsPage/>} />
        <Route path = 'jobs/:id' element= {<JobPage  deleteJob = {deleteJob} />}  loader = {jobLoader} />
        <Route path = '/add-job' element= {<AddJobpage addJobSubmit={addJob}/>} />
        <Route path = '*' element= {<NotFoundPage/>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App
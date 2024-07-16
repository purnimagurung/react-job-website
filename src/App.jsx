import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import JobCard from './components/JobCard'
import JobListing from './components/JobListing'
import ViewJobs from './components/ViewJobs'

const App = () => {
  return (
   <>
   <Navbar />
   <Banner />
   <JobCard />
   <JobListing />
   <ViewJobs />
   </>
  )
}

export default App
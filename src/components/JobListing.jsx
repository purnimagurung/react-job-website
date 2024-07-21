import Spinner from './Spinner';
import { useState, useEffect } from 'react';
import JobList from './JobList';
// import jobs from '../jobs.json';

const JobListing = ( {isHome = false}) => {
  // Display only three jobs vacancy
  // const jobListings = isHome ? jobs.slice(0,3) : jobs;
  const [jobs, setJobs] = useState([]);
  // for loading spinner
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const fetchJobs = async()=> {
      const apiUrl = isHome 
      // ? 'http://localhost:8000/jobs?_limit=3'  // Assuming your API supports a limit query parameter
      // : 'http://localhost:8000/jobs'
      ? '/api/jobs?_limit=3'  // Use the /api prefix to indicate this should be proxied
      : '/api/jobs';
        try{
          const response = await fetch (apiUrl);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setJobs(result);
          setLoading(false);
        }
        catch(error){
          setError(error);
          setLoading(false);

        }
          
    }

    fetchJobs();
  }, []);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Recent Jobs': 'Browse Jobs'}
            </h2>
              {loading ? (
                <Spinner loading = {loading} />

              ): (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {jobs.map((job)=> (
                  <JobList key = {job.id} job={job} />
                  ))}
                </div>
              )}
        </div>
      </section>
    </>
  )
}

export default JobListing
import JobList from './JobList';
import jobs from '../jobs.json';

const JobListing = ( {title = 'Browser Jobs'}) => {
  // Display only three jobs vacancy
  const recentJobs = jobs.slice(0,3);
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentJobs.map((job)=> (
              <JobList key = {job.id} job={job} />
             ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default JobListing
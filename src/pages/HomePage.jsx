import Banner from '../components/Banner';
import Card from '../components/Card';
import JobCard from '../components/JobCard';
import JobList from '../components/JobList';
import JobListing from '../components/JobListing';
import ViewJobs from '../components/ViewJobs';

const HomePage = () => {
  return (
    <>
        <Banner />
        <JobCard />
        <JobListing isHome ={true}/>
        <ViewJobs />
    </>
  );
}

export default HomePage
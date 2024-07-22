import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        const fetchJob = async () => {
            try{
                const response = await fetch (`/api/jobs/${id}`);
                const result = await response.json();
                setJob(result);
              }
              catch(error){
                console.log('Error fetching data', error);
              } finally {
                setLoading(false);
              }
          };
          // call the function
          fetchJob()
    }, [])
    
    return loading? <Spinner /> : <h1>{job.title}</h1>;
};

// const jobLoader = async({})

export default JobPage
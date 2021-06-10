import React, { useEffect, useState} from 'react';
import CreateJob from '../modals/CreateJob';
import Card from './Card';

const JobList = () => {
    const [modal, setModal] = useState(false);
    const [jobList, setJobList] = useState([])

    
    useEffect(() => {
        let arr = localStorage.getItem("jobList")
        
        if(arr){
            let obj = JSON.parse(arr)
            setJobList(obj)
        }
    }, [])

    const toggle = () => {
        setModal(!modal);
    }

    const saveJob = (jobObj) => {
        let tempList = jobList
        tempList.push(jobObj)
        localStorage.setItem("jobList", JSON.stringify(tempList))
        setModal(false)
        setJobList(tempList)
    }

    return (
    <> 
        <div className="header text-center">
            <h3>Job Wish List</h3>
            <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)}>Add a Job</button>
        </div>
        <div className = "job-container">
        {jobList.map((obj) => <li>{obj.Name}</li> )}
            {/* {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )} */}
        </div>
        <CreateJob toggle = {toggle} modal = {modal} save ={saveJob}/>
    </>
    );
};

export default JobList;


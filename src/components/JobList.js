import React, {useEffect, useState} from 'react';
import CreateJob from '../modals/createJob';

const JobList = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    return (
    <> 
        <div className="header text-center">
            <h3>Job Wish List</h3>
            <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)}>Add a Job</button>
        </div>
        <div className = "job-container">

        </div>
        <CreateJob toggle = {toggle} modal = {modal}/>
    </>
    );
};

export default JobList;


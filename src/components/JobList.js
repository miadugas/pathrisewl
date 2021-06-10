import React from 'react';
import CreateJob from '../modals/createJob';

const JobList = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    return (
    <> 
        <div className="header text-center">
            <h3>Wish List</h3>
            <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)}>add Task</button>
        </div>
        <div className = "job-container">

        </div>
        <CreateJob toggle = {toogle} modal = {modal} />
    </>
    );
};

export default JobList;


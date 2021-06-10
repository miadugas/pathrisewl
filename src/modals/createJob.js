import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateJobPopup = ({modal,toggle, save}) => {
    const [jobName, setJobName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    ////////////////////////////////////
    // May add more fields
    //
    // const [webAddress, setWebAddress] = useState('');
    //const [notes, setNotes] = useState('');
    ////////////////////////////////////

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "jobName"){
        setJobName(value)
        }else{
            setJobTitle(value)
        }

    }

    const handleSave = (e) => {
    //     e.preventDefault()
        let jobObj = {}
        jobObj["Company"] = jobName
        jobObj["Job Title"] = jobTitle
        save(jobObj)
    }


    
    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Add a Job</ModalHeader>
            <ModalBody>
            <form>
                <div className="form-group" value = {jobName} onChange = {handleChange} name = "jobName">
                    <label>Company</label>
                    <input type="text" className = "form-control"/>
                </div>
                <div className="form-group" value = {jobTitle} onChange = {handleChange} name = "jobTitle">
                <label>Job Title</label>
                <input type="text" className = "form-control"/>
                </div>
                {/* <div className="form-group" value = {webAddress} onChange = {handleChange} name = "webAddress">
                <label>Web Address</label>
                    <input type="text" className = "form-control"/>
                </div>
                <div className="form-group" value = {notes} onChange = {handleChange} name = "notes">
                <label>Notes</label>
                    <textarea rows="3" className = "form-control"/>
                </div> */}
            </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Continue</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateJobPopup;
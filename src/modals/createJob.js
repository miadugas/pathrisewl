import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const createJob = ({modal,toggle}) => {
    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Add a Job</ModalHeader>
            <ModalBody>
            <form>
                <div className="form-group">
                    <label>Company</label>
                    <input type="text" className = "form-control"/>
                </div>
                <div className="form-group">
                <label>Job Title</label>
                <input type="text" className = "form-control"/>
                </div>
                <div className="form-group">
                <label>Web Address</label>
                    <input type="text" className = "form-control"/>
                </div>
                <div className="form-group">
                <label>Notes</label>
                    <textarea rows="3" className = "form-control"/>
                </div>
            </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Continue</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default createJob;
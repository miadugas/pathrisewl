import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateWishPopup = ({modal, toggle, save}) => {
    const [wishName, setWishName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "wishName"){
            setWishName(value)
        }else{
            setDescription(value)
        }


    }

    const handleSave = (e) => {
        e.preventDefault()
        let wishObj = {}
        wishObj["Name"] = wishName
        wishObj["Description"] = description
        save(wishObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add a company to your wish list</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label></label>
                        <input type="text" className = "form-control" value = {wishName} onChange = {handleChange} name = "wishName" placeholder="Company name here ..."/>
                    </div>
                    <div className = "form-group">
                        <label></label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description" placeholder="Position desired here ..."></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="info" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateWishPopup;
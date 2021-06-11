import React, {useEffect, useState} from 'react';
import CreateWish from '../modals/CreateWish'
import Card from './Card';

const WishList = () => {
    const [modal, setModal] = useState(false);
    const [wishList, setWishList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("wishList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setWishList(obj)
        }
    }, [])


    const deleteWish = (index) => {
        let tempList = wishList
        tempList.splice(index, 1)
        localStorage.setItem("wishList", JSON.stringify(tempList))
        setWishList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = wishList
        tempList[index] = obj
        localStorage.setItem("wishList", JSON.stringify(tempList))
        setWishList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveWish = (wishObj) => {
        let tempList = wishList
        tempList.push(wishObj)
        localStorage.setItem("wishList", JSON.stringify(tempList))
        setWishList(wishList)
        setModal(false)
    }


    return (
        <>
            <div className = "header text-center">
                <h3>Your Job Wish List</h3>
                <button className = "btn btn-info mt-2" onClick = {() => setModal(true)} > + Add to List </button>
            </div>
            <div className = "wish-container">
            {wishList && wishList.map((obj , index) => <Card wishObj = {obj} index = {index} deleteWish = {deleteWish} updateListArray = {updateListArray}/> )}
            </div>
            <CreateWish toggle = {toggle} modal = {modal} save = {saveWish}/>
        </>
    );
};

export default WishList;
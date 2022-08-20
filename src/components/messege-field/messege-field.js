import { useState } from "react"

import MessengerHeader from "../messenger-header/messenger-header"
import MessegeForm from "../messege-form/messege-form"
import MessegeContent from "../messege-content/messege-content"

import './messege-field.scss'

const MessegeField = (props) => {
    const [messege, setMessege] = useState([]);    
    const {contactId} = props;
    
    return (
        <div className="messeges">
            <MessengerHeader contactId = {contactId}/>
            <MessegeContent contactId = {contactId} messege = {messege}/>
            <MessegeForm setMessege = {setMessege} contactId = {contactId}/>
        </div>
    )
}

export default MessegeField;
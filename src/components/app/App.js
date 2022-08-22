import { useState } from "react";

import ContactsHeader from "../contacts-header/contacts-header";
import ContactsList from "../contacts-list/contacts-list";
import MessegeField from "../messege-field/messege-field";
import "./App.scss";


const App = () => {
    const [messege, setMessege] = useState([]);    
    const [contactId, setContactId] = useState(0);
    const [lastMessege, setLastMassege] = useState([]);

    return (
        <div className="app">
            <div className="aside">
                <ContactsHeader contactId = {contactId}/>
                <ContactsList messege = {messege} lastMessege = {lastMessege} contactId = {contactId} setContactId = {setContactId}/>
            </div>
            <MessegeField messege = {messege} setMessege = {setMessege} setLastMassege = {setLastMassege} contactId = {contactId}/>
            
        </div>       
    )
}

export default App
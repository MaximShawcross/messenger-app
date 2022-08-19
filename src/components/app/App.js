import { useState } from "react";

import ContactsHeader from "../contacts-header/contacts-header";
import ContactsList from "../contacts-list/contacts-list";
import MessegeField from "../messege-field/messege-field";
import "./App.scss";


const App = () => {

    const [contactId, setContactId] = useState(0);

    return (
        <div className="app">
            <div className="aside">
                <ContactsHeader contactId = {contactId}/>
                <ContactsList setContactId = {setContactId}/>
            </div>
            <MessegeField contactId = {contactId}/>
            
        </div>       
    )
}

export default App
import { useState } from "react";

import ContactsHeader from "../contacts-header/contacts-header";
import ContactsList from "../contacts-list/contacts-list";
import MessegeField from "../messege-field/messege-field";
import "./App.scss";


const App = () => {
    const [messege, setMessege] = useState([]);    
    const [contactId, setContactId] = useState(0);
    const [lastMessege, setLastMassege] = useState([]);
    const [users, setUsers] = useState([])
    const [sortedUsers, setSortedUsers] = useState([]);

    return (
        <>
        <div className="app">
        <div className="aside">
            <ContactsHeader sortedUsers = {sortedUsers} setSortedUsers = {setSortedUsers} users = {users} contactId = {contactId}/>
            <ContactsList sortedUsers = {sortedUsers} setUsers = {setUsers} messege = {messege} lastMessege = {lastMessege} contactId = {contactId} setContactId = {setContactId}/>
        </div>
            <MessegeField messege = {messege} setMessege = {setMessege} setLastMassege = {setLastMassege} contactId = {contactId}/>
        </div>  
        <footer class = "footer"></footer>  
        </>
           
        
    )
}

export default App
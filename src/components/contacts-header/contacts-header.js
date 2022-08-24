import { useState, useEffect } from 'react';

import './contacts-header.scss';

import decoration from '../../resources/icons/avatar-icon.png';

const ContactsHeader = ({users, sortedUsers, setSortedUsers}) => {

    const sortByMesseges = (e) => {
        const term = e.target.value;
        console.log(users);

        // user.messeges.map(item => item.value.toLowerCase().includes(term.toLowerCase()))

        const filtered = users.filter(user => {
            return user.name.toLowerCase().includes(term.toLowerCase()) || user.messeges[user.messeges.length - 1].value.toLowerCase().includes(term.toLowerCase())
        })

        setSortedUsers(filtered);
     }

    return (
        <div className="aside__header">
            <div className="aside__header__img">
                <img src= {decoration} alt="avatar"/>
            </div>
            <input onChange = {(e) => console.log(sortByMesseges(e, users))} className = "aside__header__search" type="text" placeholder="Search or start new chat"/>
        </div>
    )
}

export default ContactsHeader;
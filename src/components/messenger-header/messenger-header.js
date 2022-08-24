import { useEffect, useState } from 'react';

import { useHttp } from '../../hooks/http.hook'; 

import './messenger-header.scss';

const MessengerHeader = (props) => {
    const [header, setHeader] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false);
    
    const {contactId} = props;
    const {request} = useHttp();

    useEffect(() => {
        contactId === 0 ? getHeader(1) :getHeader(contactId);
    }, [contactId])


    const getHeader = (id = 1) => {
        request(`http://localhost:3001/users/${id}`)
            .then(item => setHeader(item))
            .then(setLoadingStatus(true));
    }
    
    const renderItem = (header) => {
        const {img, name} = header;

       return ( 
            <>
                <img src = {img} alt="user-avatar"/>
                <img className = "aprove" src={require("../../resources/icons/aprove-icon.png")} alt="aprove" />
                <h2 className = "messeges__header__name">{name}</h2>
            </>
        )
    }

    const items = renderItem(header);
    const content = loadingStatus ? items : <p>wait a second</p>;

    return (
        <div className="messeges__header">
            {content}
        </div>
    )
}

export default MessengerHeader;
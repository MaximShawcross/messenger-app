import { useEffect, useState } from 'react';

import { useHttp } from '../../hooks/http.hook'; 

import './messege-content.scss';

const MessegeContent = (props) => {
    const [messeges, setMesseges] = useState([]);
    const [image, setImage] = useState("");
    const [loadingStatus, setLoadingStatus] = useState(false);    

    const {request} = useHttp();
    const {contactId} = props;
    
    useEffect(() => {
        contactId === 0 ? getMesseges() : getMesseges(contactId);
        contactId === 0 ? getImage() : getImage(contactId);
    }, [contactId])
    
    const getMesseges = (id = 1) => {
        request(`http://localhost:3001/users/${id}`)
            .then(item => setMesseges(item.messeges))
            .then(setLoadingStatus(true));        
    }

    const getImage = (id = 1) => {
        request(`http://localhost:3001/users/${id}`)
            .then(item => setImage(item.img));
    }

    const renderComponents = (arr, img) => {
        return arr.map(item => {
            if (item.type === "own") {
               return <OwnMessegeItem value = {item.value} date = {item.date} time = {item.time}/>;
            } else {
                return <ResponseMessegeItem img = {img} value = {item.value} date = {item.date} time = {item.time}/>;
            }
        })
    }

    const items = renderComponents(messeges, image);
    const content = loadingStatus ? items : <p>wait a second</p>;

    return (
        <>
            {content}
        </>
    )
}

const OwnMessegeItem = (props) => {
    const {value, date, time} = props;

    return (
        <div className="own-message__item">
            <div className="own-message__item__content">
                <div className="own-message__item__wrapper__rounded">
                    <div className="own-message__item__wrapper__rounded__text">{value}</div>
                </div>
                <div className="own-message__item__wrapper__date">
                    <div className="date">{date},</div> 
                    <div className="own-message__item__wrapper__date__time">{time}</div> 
                </div>
            </div>
        </div>
    )
}

const ResponseMessegeItem = (props) => {
    const {value, date, time, img} = props;

    return (
        <div className="response-message__item">
            <img src = {img} alt="user-avatar"/>
            <div className="response-message__item__content">
                <div className="response-message__item__wrapper__rounded">
                    <div className="response-message__item__wrapper__rounded__text">{value}</div>
                </div>
                <div className="response-message__item__wrapper__date">
                    <div className="date">{date},</div> 
                    <div className="response-message__item__wrapper__date__time">{time}</div> 
                </div>
            </div>
        </div>
    )
}

export default MessegeContent;
import { useEffect, useState } from 'react';

import { useHttp } from '../../hooks/http.hook'; 

import './messege-content.scss';

const MessegeContent = () => {
    const [messeges, setMesseges] = useState([]);
    const [messagesImg, setMessegesImg] = useState("");
    const [loadingStatus, setLoadingStatus] = useState(false);    

    const {request} = useHttp();
    
    useEffect(() => {
        getMesseges(2)
    }, [])
    
    const getMesseges = (id) => {
        request(`http://localhost:3001/users/${id}`)
            .then(item => setMesseges(item.messeges))
            .then(setLoadingStatus(true));        
    }

    const renderComponents = (arr) => {
        return arr.map(item => {
            if (item.type === "own") {
               return <OwnMessegeItem value = {item.value} date = {item.date} time = {item.time}/>
            } else {
                return <ResponseMessegeItem value = {item.value} date = {item.date} time = {item.time}/>
            }
        })
    }

    const items = renderComponents(messeges);
    const content = loadingStatus ? items : null;

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
    const {value, date, time} = props;

    return (
        <div className="response-message__item">
            <img src= "" alt="user-avatar"/>
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
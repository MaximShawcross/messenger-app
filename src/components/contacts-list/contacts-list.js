import { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook'; 

import './contacts-list.scss';

const ContactsList = (props) => {
    const [userList, setUserList] = useState([]);  
    const [loadingStatus, setLoadingStatus] = useState(false); 

    const {request} = useHttp()

    const setId = (id) => {
        props.setContactId(id);
    }
    
    useEffect(() => {
        getUsers();
        // eslint-disable-next-line
    }, [])

    const getUsers = () => {
        request("http://localhost:3001/users")
            .then(item => setUserList(item))
            .then(setLoadingStatus(true));
    }

    function renderComponents (arr) {   
       return arr.map(item => {
            return <View key = {item.id} id = {item.id} 
            name = {item.name} time = {item.time} 
            img = {item.img} messege = {item.messege} 
            setId = {setId}/>
        })
    } 
    
    const items = renderComponents(userList);
    const content = loadingStatus ? items : null;


    return (
        <div className="aside__list">
            <h1 className="aside__list__header">Chats</h1>
            {content}
        </div>
    )
}

const View = (props) => {
    const {name, time, img, messege, setId, id} = props;

    return (
        <div className="aside__list__item"
            onClick = {() => setId(id)}>
            <div className="aside__list__item__img">
                <img src = {img} alt="user-avatar"/>
            </div>
            <div className="aside__list__item__text">
                <p className="aside__list__item__text__name">{name}</p>
                <div className="aside__list__item__text__message">{messege}</div>
            </div>
            <div className="aside__list__item__date">{time}</div>
        </div>
    )
}

export default ContactsList;
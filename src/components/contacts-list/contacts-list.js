import { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook'; 

import './contacts-list.scss';

const ContactsList = ({setContactId, lastMessege, contactId, messege}) => {
    const [newMessege, setNewMessege] = useState([]);
    const [userList, setUserList] = useState([]);  
    const [loadingStatus, setLoadingStatus] = useState(false); 
    // console.log(lastMessege[0])
    const {request} = useHttp()

    const setId = (id) => {
        setContactId(id);
    }
    
    useEffect(() => {
        getUsers();
        
        try {
            setMessege(messege);
        } catch {
            console.log("messege not found")
        }
        
        // eslint-disable-next-line
    }, [messege])

    const setMessege = (messege) => {
        setNewMessege(messege[messege.length -1].value);
    }

    const getUsers = () => {
        request("http://localhost:3001/users")
            .then(item => setUserList(item))
            .then(setLoadingStatus(true))
    }

    function renderComponents (arr) {        
        return arr.map(item => {
            let messeges = item.messeges
            let staticLastMessege = messeges[messeges.length -1].value;

            let contentLastMessege = newMessege.length > 0 && item.id === lastMessege[lastMessege.length -1].id ? newMessege : staticLastMessege; 

            return <View key = {item.id} id = {item.id} 
            name = {item.name} time = {item.time} 
            img = {item.img} lastMessege = {contentLastMessege} 
            setId = {setId}/>
        })
    } 

    const items = renderComponents(userList);
    const content = loadingStatus ? items : null;

    // filterComponents(items);


    return (
        <div className="aside__list">
            <h1 className="aside__list__header">Chats</h1>
            {content}
        </div>
    )
}

const View = (props) => {
    const {name, time, img, lastMessege, setId, id} = props;
    
    return (
        <div className="aside__list__item"
            onClick = {() => setId(id)}>
            <div className="aside__list__item__img">
                <img src = {img} alt="user-avatar"/>
            </div>
            <div className="aside__list__item__text">
                <p className="aside__list__item__text__name">{name}</p>
                <div className="aside__list__item__text__message">{lastMessege}</div>
            </div>
            <div className="aside__list__item__date">{time}</div>
        </div>
    )
}

export default ContactsList;
import { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook'; 

import './contacts-list.scss';

const ContactsList = ({sortedUsers, setContactId, lastMessege, setUsers, messege}) => {
    const [newMessege, setNewMessege] = useState([]);
    const [userList, setUserList] = useState([]);  
    const [loadingStatus, setLoadingStatus] = useState(false); 

    const {request} = useHttp()

    const setId = (id) => {
        setContactId(id);
    }

    const sortByNewMessege = (a, b) => {
        return a.messeges[a.messeges.length - 1].sortDate > b.messeges[b.messeges.length - 1].sortDate ? -1 : 1;     

    };
    
    useEffect(() => {
        getUsers();
        try {
            setMessege(messege.value);
        } catch {
            console.log("messege not found")
        }
        
        // eslint-disable-next-line
    }, [messege])

    const setMessege = (messege) => {
        setNewMessege(messege[messege.length -1]);
    }

    const getUsers = () => {
        request("http://localhost:3001/users")
            .then(item => {
                setUserList(item.sort(sortByNewMessege))
                setUsers(item.sort(sortByNewMessege));
            })
            .then(setLoadingStatus(true))
    }

    function renderComponents (arr, sorte) {  
        
        return arr.map(item => {
            const messeges = item.messeges;
           
            const staticLastMessege = messeges[messeges.length -1].value;
            const contentLastMessege = newMessege.length > 0 && item.id === lastMessege[lastMessege.length -1].id ? newMessege : staticLastMessege; 

            const staticLastDate = messeges[messeges.length -1].contactDate;
            const contentLastDate = newMessege.length > 0 && item.id === lastMessege[lastMessege.length -1].id ? lastMessege[lastMessege.length -1].contactDate : staticLastDate; 

            return <View key = {item.id} id = {item.id} 
            name = {item.name} time = {contentLastDate} 
            img = {item.img} lastMessege = {contentLastMessege} 
            setId = {setId}/>
        })
    } 

    const items = renderComponents(userList);
    const sortedItems = renderComponents(sortedUsers);


    const content = loadingStatus && sortedUsers.length === 3 || sortedUsers.length === 0 ? items : sortedItems;

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
            tabIndex="0"            
            onClick = {() => setId(id)}>
            <div className="aside__list__item__img">
                <img src = {img} alt="user-avatar"></img>
                <img className = "aprove" src={require("../../resources/icons/aprove-icon.png")} alt="aprove" />
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
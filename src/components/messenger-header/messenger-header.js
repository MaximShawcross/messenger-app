import './messenger-header.scss';
import avatar from '../../resources/img/kaneki_avatar.jpg';


const MessengerHeader = () => {
    return (
        <div className="messeges__header">
            <img src= {avatar} alt="user-avatar"/>
            <h2 className = "messeges__header__name">Aloha dance</h2>
        </div>
    )
}

export default MessengerHeader;
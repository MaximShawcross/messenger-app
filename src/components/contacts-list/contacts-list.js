import './contacts-list.scss';
import avatar from '../../resources/img/luffy_avatar.jpg';


const ContactsList = () => {

    return (
        <div className="aside__list">
            <h1 className="aside__list__header">Chats</h1>
            <div className="aside__list__item">
                <div className="aside__list__item__img">
                    <img src = {avatar} alt=""/>
                </div>
                <div className="aside__list__item__text">
                    <p className="aside__list__item__text__name">Alice Freeman</p>
                    <div className="aside__list__item__text__message">You are the worst!</div>
                </div>
                <div className="aside__list__item__date">Feb 18, 2017</div>
            </div>
            <div className="aside__list__item">
                <div className="aside__list__item__img">
                    <img src = {avatar} alt="avatar"/>
                </div>
                <div className="aside__list__item__text">
                    <p className="aside__list__item__text__name">Alice Freeman</p>
                    <div className="aside__list__item__text__message">You are the worst!</div>
                </div>
                <div className="aside__list__item__date">Feb 18, 2017</div>
            </div>
            <div className="aside__list__item">
                <div className="aside__list__item__img">
                    <img src = {avatar} alt="user-avatar"/>
                </div>
                <div className="aside__list__item__text">
                    <p className="aside__list__item__text__name">Alice Freeman</p>
                    <div className="aside__list__item__text__message">You are the worst!</div>
                </div>
                <div className="aside__list__item__date">Feb 18, 2017</div>
            </div>
        </div>
    )
}

export default ContactsList;
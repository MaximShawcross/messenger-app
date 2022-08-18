import './messege-content.scss';
import avatar from '../../resources/icons/avatar-icon.png'

const MessegeContent = () => {
    return (
        <>
            <OwnMessegeItem/>
            <ResponseMessegeItem/>
        </>
    )
}

const OwnMessegeItem = () => {
    return (
        <div className="own-message__item">
            <div className="own-message__item__content">
                <div className="own-message__item__wrapper__rounded">
                    <div className="own-message__item__wrapper__rounded__text">can u wait for me?</div>
                </div>
                <div className="own-message__item__wrapper__date">4/22/17, 4:00 AM</div>
            </div>
        </div>
    )
}

const ResponseMessegeItem = () => {
    return (
        <div className="response-message__item">
            <img src= {avatar} alt="user-avatar"/>
            <div className="response-message__item__content">
                <div className="response-message__item__wrapper__rounded">
                    <div className="response-message__item__wrapper__rounded__text">can u wait for me?</div>
                </div>
                <div className="response-message__item__wrapper__date">4/22/17, 4:00 AM</div>
            </div>
        </div>
    )
}

export default MessegeContent;
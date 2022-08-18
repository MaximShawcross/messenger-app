import './contacts-header.scss';
import decoration from '../../resources/icons/avatar-icon.png';


const ContactsHeader = () => {

    const logger = () => {
        console.log("change");
    }

    return (
        <div className="aside__header">
            <div className="aside__header__img">
                <img src= {decoration} alt="avatar"/>
            </div>
            <input onChange = {logger} className = "aside__header__search" type="text" placeholder="Search or start new chat"/>
        </div>
    )
}

export default ContactsHeader;
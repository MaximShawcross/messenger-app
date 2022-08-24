import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

import './contacts-header.scss';

import decoration from '../../resources/icons/avatar-icon.png';

const ContactsHeader = ({users, setSortedUsers}) => {

    const sortByMesseges = (e) => {
        const term = e.target.value;

        const filtered = users.filter(user => {
            return user.name.toLowerCase().includes(term.toLowerCase()) || user.messeges[user.messeges.length - 1].value.toLowerCase().includes(term.toLowerCase())
        })

        setSortedUsers(filtered);
     }

    return (
        <div className="aside__header">
            <div className="aside__header__img">
                <img src= {decoration} alt="avatar"/>
                <img className = "aprove" src={require("../../resources/icons/aprove-icon.png")} alt="aprove" />
            </div>
            <FontAwesomeIcon className = "aside__header__icon" icon={faMagnifyingGlass} />
            <input onChange = {(e) => sortByMesseges(e, users)} className = "aside__header__search" type="text" placeholder="Search or start new chat"/>

        </div>
    )
}

export default ContactsHeader;
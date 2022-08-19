import MessengerHeader from "../messenger-header/messenger-header"
import MessegeForm from "../messege-form/messege-form"
import MessegeContent from "../messege-content/messege-content"

import './messege-field.scss'

const MessegeField = (props) => {
    const {contactId} = props;
    return (
        <div className="messeges">
            <MessengerHeader contactId = {contactId}/>
            <MessegeContent contactId = {contactId}/>
            <MessegeForm/>
        </div>
    )
}

export default MessegeField;
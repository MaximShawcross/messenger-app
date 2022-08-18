import MessengerHeader from "../messenger-header/messenger-header"
import MessegeForm from "../messege-form/messege-form"
import MessegeContent from "../messege-content/messege-content"

import './messege-field.scss'

const MessegeField = () => {

    return (
        <div className="messeges">
            <MessengerHeader/>
            <MessegeContent/>
            <MessegeForm/>
        </div>
    )
}

export default MessegeField;
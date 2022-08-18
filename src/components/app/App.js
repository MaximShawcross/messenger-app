import ContactsHeader from "../contacts-header/contacts-header";
import ContactsList from "../contacts-list/contacts-list";
import MessegeField from "../messege-field/messege-field";
import "./App.scss";


const App = () => {

    return (
        <div className="app">
            <div className="aside">
                <ContactsHeader/>
                <ContactsList/>
            </div>
            <MessegeField/>
            
        </div>       
    )
}

export default App
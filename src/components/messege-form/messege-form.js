import './messege-form.scss';

const MessegeForm = () => {     

    return (
        <div className="messeges__footer">
            <form className="messeges__footer__wrapper">
                <input className = "messeges__footer__input" placeholder = "Type your mesaage"/>
                <button> btn</button>
            </form>
        </div>
    )
}

export default MessegeForm;
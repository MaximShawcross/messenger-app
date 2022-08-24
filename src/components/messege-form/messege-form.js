import { useState, useEffect } from "react";

import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import {NotificationContainer, NotificationManager} from 'react-notifications';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

import { messegeDate, messegeTime, contactDate} from '../../hooks/date.hook';
import { useHttp } from "../../hooks/http.hook";

import './messege-form.scss';
import 'react-notifications/lib/notifications.css';

const MessegeForm = (props) => {     
    const [user, setUser] = useState("");

    const {contactId, setMessege, setLastMassege} = props;
    const {request} = useHttp();
    
    
    useEffect(() => {    
        contactId === 0 ? getMesseges() : getMesseges(contactId)
    }, [contactId])

    const getRange = () => {
        return Number(`${(Math.random() * (15 - 10) + 10).toFixed(0)}000`);
    }
    const renge = getRange();


    const createNotification = (type, text) => {
        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info(text);
                    break;
                default: 
                    console.log(1);
                    break;
            }
        };
    };
    
    const getMesseges = (id = 1) => {
        request(`http://localhost:3001/users/${id}`)
        .then(item => setUser(item))
    }

    const setSubmitMessege = (values, type) => {
        let settings = {
            type: type, 
            value: values, 
            date: messegeDate(), 
            time: messegeTime(),
            contactDate: contactDate(),
            sortDate: new Date(),
            id:contactId,
            img: user.img
        }

        setMessege(item => [...item, settings]);
        setLastMassege(item => [...item, settings]);

        user.messeges.push(settings);

        if ( type === "response" ) {
            request(`http://localhost:3001/users/${contactId}`, "PUT", JSON.stringify(user))
                .then(item => console.log("sucsess", item))
                // .then(() => createNotification('info', "2"))
        } else {
            request(`http://localhost:3001/users/${contactId}`, "PUT", JSON.stringify(user))
                .then(item => console.log("sucsess", item))
        }
        
    }

    const setChuckMessege = () => {
        request("https://api.chucknorris.io/jokes/random")
            .then(item => {
                setTimeout(createNotification('info', item.value), 0);
                return setSubmitMessege(item.value, "response")
            })
    }

    return (
        <Formik initialValues={{
            id: nanoid(),
            messege: ''
        }}
        onSubmit = { values => {
            setSubmitMessege(values.messege, "own");
            setTimeout(setChuckMessege, renge);
            values.messege = "";
        }} 
        >
            <div className="messeges__footer">
                <Form className="messeges__footer__wrapper">
                    <Field
                        required
                        type = "text"
                        name = "messege"
                        id = "messege"
                        className = "messeges__footer__input" 
                        placeholder = "Type your mesaage"
                        autoComplete="off"/>
                        <button tabIndex = "0" className = "messeges__footer__button" type = "submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
                </Form>
                <NotificationContainer/>
            </div>
        </Formik>
    )
//testing
}

export default MessegeForm;
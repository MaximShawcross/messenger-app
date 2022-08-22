import { useState, useEffect } from "react";

import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";

import { useHttp } from "../../hooks/http.hook";

import './messege-form.scss';

const MessegeForm = (props) => {     
    const [user, setUser] = useState("");

    const {contactId, setMessege, setLastMassege} = props;
    const {request} = useHttp();
    
    useEffect(() => {    
        contactId === 0 ? getMesseges() : getMesseges(contactId)
    }, [contactId])
    
    const getMesseges = (id = 1) => {
        request(`http://localhost:3001/users/${id}`)
        .then(item => setUser(item))
    }

    return (
        <Formik initialValues={{
            id: nanoid(),
            messege: ''
        }}
        onSubmit = { values => {
            let settings = {
                type: 'own', 
                value: values.messege, 
                date: '21/12/2119', 
                time: '21:21 pm',
                id:contactId
            }

            setMessege(item => [...item, settings]);
            setLastMassege(item => [...item, settings]);

            user.messeges.push(settings);
            request(`http://localhost:3001/users/${contactId}`, "PUT", JSON.stringify(user))
                .then(item => console.log("sucsess", item))
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
                        placeholder = "Type your mesaage"/>
                    <button type = "submit"> btn</button>
                </Form>
            </div>
        </Formik>
    )
}

export default MessegeForm;
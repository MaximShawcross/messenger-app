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
        request("https://api.chucknorris.io/jokes/random")
                .then(item => console.log(item.value))
        
    }, [contactId])
    
    const getMesseges = (id = 1) => {
        request(`http://localhost:3001/users/${id}`)
        .then(item => setUser(item))
    }

    const getRange = () => {
        return Number(`${(Math.random() * (15 - 10) + 10).toFixed(0)}000`);
    }


    const setSubmitMessege = (values, type) => {
        let settings = {
            type: type, 
            value: values, 
            date: '21/12/2119', 
            time: '21:21 pm',
            id:contactId,
            img: user.img
        }

        setMessege(item => [...item, settings]);
        setLastMassege(item => [...item, settings]);

        user.messeges.push(settings);
        request(`http://localhost:3001/users/${contactId}`, "PUT", JSON.stringify(user))
            .then(item => console.log("sucsess", item))
    }

    const setChuckMessege = () => {
        request("https://api.chucknorris.io/jokes/random")
                .then(item => setSubmitMessege(item.value, "response"))
    }

    return (
        <Formik initialValues={{
            id: nanoid(),
            messege: ''
        }}
        onSubmit = { values => {
            setSubmitMessege(values.messege, "own");
            setTimeout(setChuckMessege, getRange());
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
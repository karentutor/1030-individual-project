import React from 'react';
import Form from '../common/form';
import Joi from 'joi-browser';
import {addEntry} from '../../services/entryService'
import { toast } from 'react-toastify';

class ContactForm  extends Form {

    state = {
        data: {
            name: "",
            email: "",
            phoneNumber: "",
            content: ""
        },
        errors: {}
    }

    schema  = {
        name: Joi.string().required().label('Name'),
        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).label('Email'),
        phoneNumber: Joi.number().integer().required().label('PhoneNumber'),
        content: Joi.string().min(3).max(250).required().label('Content')
    }

    handleAdd = async data => { 
        try {
            await addEntry(data);
            window.location = '/';
            toast.success('Success - we will respond shortly')

        } catch (e) { 

             if (e)
            {
                const errors = { ...this.state.errors };
                errors.email = 'Sorry, please try again';
                this.setState({ errors });
                }
        }
    }

    doSubmit = () => { 
        const data = this.state.data;
        this.handleAdd(data);
    }

    render() {

        return (

        <section className="contact p-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5 pb-4">
                    <h3 className="display-4 mb-5 text-white">Get In Touch</h3>

                    <form className="contact-form" id="form-contact" onSubmit={this.handleSubmit}>
                                
                                {this.renderInput('name', 'Name')}
                                {this.renderInput('email', 'Email', 'email')}
                                {this.renderInput('phoneNumber', 'Phone Number')}
                                {this.renderTextArea('content', 'Content', "1", "40")}
                                {this.renderButton('Submit')}
                    
                    </form>
            </div>
            </div>
        </div>
        </section>

        )
    }
}
 
export default ContactForm;
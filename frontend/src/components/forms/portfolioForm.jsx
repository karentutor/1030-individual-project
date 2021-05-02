import React from 'react';
import Form from '../common/form';
import Joi from 'joi-browser';
import {addEntry} from '../../services/entryService'
import { toast } from 'react-toastify';

class PortfolioForm  extends Form {

    state = {
        data: {
            title: "",
            description: "",
            completed: ""
        },
        errors: {}
    }

    schema  = {
        name: Joi.string().min(3).max(250).required().label('Title'),
        name: Joi.string().min(3).max(250).required().label('Description'),
        name: Joi.string().min(3).max(250).required().label('Date')
    }

    handleAdd = async data => { 
        try {
            await addEntry(data);
            window.location = '/';
            toast.success('Success - project entry')

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
                                
                                {this.renderInput('title', 'Title')}
                                {this.renderInput('description', 'Description')}                    
                    </form>
            </div>
            </div>
        </div>
        </section>

        )
    }
}
 
export default ContactForm;
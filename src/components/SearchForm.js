import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/articles'

function handleFormSubmit(event) {

    event.preventDefault()

    this.props.fetchArticles()
}

export class SearchForm extends Component {
    
    render() {
        return (
            <section id='form-container' className='form-container'>

                <h3>Welcome to the New York Times Article Search</h3>

                <form id='search-form' className='search-form' onSubmit={handleFormSubmit.bind(this)}>
                  
                  <div id='datepicker-container' className='datepicker-container'>

                        <label id='datepicker-startDate-label' className='datepicker-startDate-label'>
                            Start Date 
                            <DatePicker/>
                        </label>

                        <label id='datepicker-endDate-label' className='datepicker-endDate-label'>
                            End Date 
                            <DatePicker/>
                        </label> 
                 </div>  

                <div id='search-text-input-container' className='search-text-input-container'>
                        <input className='search-text-input' placeholder='Enter search text'/>
                </div>

                <div id='submit-form-button-container' className='submit-form-button-container'>
                        <button className='submit-form-button' type='submit'>Submit</button>
                </div>

                </form>    

            </section>
        )
    }
}

export default connect(null, { fetchArticles })(SearchForm)
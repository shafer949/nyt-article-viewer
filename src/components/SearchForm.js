import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

class SearchForm extends Component {

    render() {
        return (
            <section>
                <form className='search-form'>
                    <div className='datepicker-container'>
                        <label className='datepicker-startDate-label'>
                            Start Date 
                            <DatePicker/>
                        </label>
                    </div>    
                </form>    
            </section>
        )
    }
}

export default SearchForm
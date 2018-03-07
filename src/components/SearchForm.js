import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/articles'

export class SearchForm extends Component {
    
    componentDidMount() {
        this.props.fetchArticles()
    }
 
    render() {
        return (
            <section>
                <form className='search-form'>
                    <div className='datepicker-container'>

                        <label className='datepicker-startDate-label'>
                            Start Date 
                            <DatePicker/>
                        </label>

                        <label className='datepicker-endDate-label'>
                            End Date 
                            <DatePicker/>
                        </label> 
                    </div>    

                    <input className='search-text-input' placeholder='Enter search text'/>
                    
                    <button type="submit" className='submit-form-button'>Submit</button>
                </form>    
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        articles: state
    }
}

export default connect(mapStateToProps, { fetchArticles })(SearchForm)
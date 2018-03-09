import React, { Component } from 'react'
import SearchForm from './SearchForm'
import '../style.css'
import ArticleList from './ArticleList'

class App extends Component {

    render() {
        return (
            <main id='main-container' className='main-container'>
                <SearchForm/>
                <ArticleList/>
            </main>
        )
    }
}
 
export default App 
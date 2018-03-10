import React, { Component } from 'react'
import SearchForm from './SearchForm'
import '../style.css'
import ArticleList from './ArticleList'
import SortArticles from './SortArticles'
import { connect } from 'react-redux'
import image from '../images/search-image.jpg'

export class App extends Component {
    render() {

        const articlesShown = this.props.articles.length > 0
        const hasResults = this.props.articles !== null && this.props.articles.length > 0 

        return (
            <main id='main-container' className='main-container'>
                <h1>New York Times Article Search</h1>
                <SearchForm/>
                {!hasResults && <img src={image} alt='no-results' id='no-results-image' className='no-results-image' />}
                {articlesShown && <SortArticles/>}
                <ArticleList/>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
      articles: state
    }
}

export default  connect(mapStateToProps)(App) 
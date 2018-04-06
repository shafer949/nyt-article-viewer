import React, { Component } from 'react'
import SearchForm from './SearchForm'
import ArticleList from './ArticleList'
import SortArticles from './SortArticles'
import { connect } from 'react-redux'
import image from '../images/search-image.jpg'
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import '../style.css'

export class App extends Component {
    render() {

        const articlesShown = this.props.articles.length > 0
        const hasResults = this.props.articles !== null && this.props.articles.length > 0 

        return (
            <MuiThemeProvider>
            <Paper id='paper-style' zDepth={5}>
                <h1>New York Times Article Search</h1>              
                <Divider/>
                <SearchForm/>
                <Divider/>
                {articlesShown && <SortArticles/>}
                {!hasResults && <img src={image} alt='no-results' id='no-results-image' className='no-results-image' />}            
                <ArticleList/>
            </Paper>
            </MuiThemeProvider>
        )
    }
}
 
function mapStateToProps(state) {
    return {
      articles: state
    }
}

export default connect(mapStateToProps)(App) 

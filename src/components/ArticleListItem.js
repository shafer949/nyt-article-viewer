import React from 'react'
import PropTypes from 'prop-types'
import image from '../images/no-image.png'
import Paper from 'material-ui/Paper';

const ArticleListItem = ({ article = {} }) => {

    const { web_url, multimedia, snippet, byline } = article
   
    return (
        <Paper id='paper-style-list-item' zDepth={3}>
        <li id='article-list-item' className='article-list-item' >

            <a className='article-link' href={web_url} target='blank'>
           
                {
                    multimedia.length > 0 ?
                    <img src={`https://www.nytimes.com/${multimedia[0].url}`} alt='Article' id='article-image' className='article-image' />
                    : <img src={image} alt='not found' id='no-article-image' className='no-article-image' />
                }
            </a>          

            <p id='article-snippet' className='article-snippet'>{snippet}</p>
            <p id='article-author' className='article-author'>{byline.original}</p>
        </li>
        </Paper>
    )
}

ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
}

export default ArticleListItem
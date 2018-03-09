import React from 'react';
import PropTypes from 'prop-types'

const ArticleListItem = ({ article = {} }) => {

    const { web_url, multimedia, snippet, byline } = article

    return (
        <li id='article-list-item' className='article-list-item' >

            <a className='article-link' href={web_url} target='blank'>
                <img src={`https://www.nytimes.com/${multimedia[0].url}`} id='article-image' className='article-image' /> 
            </a>          

            <p className='article-snippet'>{snippet}</p>
            <p className='article-author'>{byline.original}</p>
        </li>
    )
}

ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
}

export default ArticleListItem
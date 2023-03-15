import React from 'react'
import './style.css'

function ArticleCard({article, onClickTitle, activeArticleId}) {
    const {title, id} = article
    return (
        <div className={`article-card ${id === activeArticleId ? 'activeArticle' : ''}`}>
            <h6 data_id={id} className={'title'} onClick={activeArticleId !== id ? onClickTitle : () => {
            }
            }>{title}</h6>
        </div>
    )
}

export default ArticleCard
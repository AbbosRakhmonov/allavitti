import React from 'react'
import './style.css'

function ArticleCard({article, onClickTitle, activeArticleId}) {
    const {title, texts, id} = article
    return (
        <div className={`article-card ${id === activeArticleId ? 'activeArticle' : ''}`}>
            <h6 data_id={id} className={'title'} onClick={activeArticleId !== id ? onClickTitle : () => {
            }
            }>{title}</h6>
            <p className={'text'}>{texts[0].slice(0, 60)}...</p>
        </div>
    )
}

export default ArticleCard
import React, {useState} from 'react'
import {map, uniqueId} from 'lodash'
import ArticleCard from '../ArticleCard/ArticleCard'
import {useNavigate} from 'react-router-dom'
import {IoChevronForward} from 'react-icons/io5'
import DetectScreenSize from '../../Hooks/DetectScreenSize'

function ArticlesMenu({articles, id}) {
    const navigate = useNavigate()
    const {isMobile} = DetectScreenSize()

    const [openArticles, setOpenArticles] = useState(true)
    const handleClickButton = () => {
        setOpenArticles(!openArticles)
    }
    const onClickTitle = (e) => {
        const id = e.target.getAttribute('data_id')
        console.log(id)
        navigate(`/articles/${id}`)
        if (isMobile) setOpenArticles(true)
    }
    return (
        <div className={`rightOfBottomSection position-absolute vh-100 ${!openArticles ? 'closedMenu' : ''}`}>
               
            <div className={`articles-menu`}>
                {
                    map(articles, (article) => <ArticleCard key={uniqueId('article_')}
                                                            activeArticleId={id}
                                                            article={article}
                                                            onClickTitle={onClickTitle}/>)
                }
            </div>
            <button type={'button'} className={`actionBtn ${!openArticles ? 'openArticleBoxButton' : ''}`}
                    onClick={handleClickButton}>
                <IoChevronForward/>
            </button>
        </div>
    )
}

export default ArticlesMenu